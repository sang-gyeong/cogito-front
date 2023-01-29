import axios from 'axios';
import moment from 'moment';
import {getLocalStorageItem, setLocalStorageItem} from '../utils/storage';
import {reissueToken} from './auth';

const axiosInstanceForCSR = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  timeout: 3000,
  withCredentials: true,
  headers: {},
});

axiosInstanceForCSR.interceptors.request.use(async request => {
  const expiresAt = getLocalStorageItem('expiresAt', moment().format('yyyy-MM-DD HH:mm:ss'));

  // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
  if (moment(expiresAt).diff(moment()) < 0) {
    const {accessToken} = await reissueToken();

    if (accessToken) {
      setLocalStorageItem('accessToken', accessToken);
      setLocalStorageItem('expiresAt', moment().add(30, 'minutes').format('yyyy-MM-DD HH:mm:ss'));
    }
  }

  const accessToken = getLocalStorageItem('accessToken', '');

  if (request.headers && accessToken) {
    request.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return request;
});

axiosInstanceForCSR.interceptors.response.use(
  response => response,
  error => {
    if (['A008', 'A011', 'A012', 'A013'].includes(error?.response?.data?.code)) {
      globalThis?.localStorage.clear();

      window.alert('로그인이 필요합니다.');

      return;
    }
    console.log('csr axios error : ', error);
    window.alert(error?.response?.data?.message ?? error?.message);
  }
);

const axiosInstanceForSSR = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  timeout: 3000,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
});

axiosInstanceForSSR.interceptors.response.use(
  response => response,
  error => {
    console.log('ssr axios error : ', error);
    throw new Error(error);
  }
);

export {axiosInstanceForCSR, axiosInstanceForSSR};

export const getTags = (): Promise<Tag[]> => axiosInstanceForCSR.get<Tag[]>(`/tags`).then(response => response?.data);

export const getUsers = (): Promise<User[]> =>
  axiosInstanceForCSR.get<User[]>(`/users`).then(response => response?.data);
