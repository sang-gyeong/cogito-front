import axios from 'axios';
import moment from 'moment';
import {getLocalStorageItem, setLocalStorageItem} from '../utils/storage';
import {reissueToken} from './auth';
import cookies from 'react-cookies';

const axiosInstanceForCSR = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  timeout: 3000,
  withCredentials: true,
  headers: {},
});

const requestReissueToken = async () => {
  try {
    const {accessToken} = await reissueToken();

    setLocalStorageItem('accessToken', accessToken);
    setLocalStorageItem('expiresAt', moment().add(60, 'minutes').format('yyyy-MM-DD HH:mm:ss'));
  } catch (e) {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('expiresAt');
  }
};

axiosInstanceForCSR.interceptors.request.use(async request => {
  const expiresAt = getLocalStorageItem('expiresAt', moment().utc(true).format('yyyy-MM-DD HH:mm:ss'));

  if (request.headers && moment(expiresAt).diff(moment(), 'minutes') <= 20) {
    await requestReissueToken();
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
    if (error?.response?.data?.code === 'A008') {
      window.alert('로그인이 필요합니다');

      return;
    } else if (['A011', 'A012'].includes(error?.response?.data?.code)) {
      cookies.remove('refreshToken');

      window.alert('토큰이 만료되어 로그아웃 되었습니다. 다시 로그인 해주세요.');

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
