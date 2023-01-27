import axios from 'axios';
import moment from 'moment';
import {useRouter} from 'next/router';
import cookies from 'react-cookies';
import {REFRESH_TOKEN_KEY} from '../constants/key';
import {getLocalStorageItem, setLocalStorageItem} from '../utils/storage';
import {reissueToken} from './auth';

const axiosInstanceForCSR = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  timeout: 3000,
  withCredentials: true,
  headers: {},
});

axiosInstanceForCSR.interceptors.request.use(async request => {
  const refreshToken = cookies.load(REFRESH_TOKEN_KEY);
  const expiresAt = getLocalStorageItem('expiresAt', moment().format('yyyy-MM-DD HH:mm:ss'));

  // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
  if (moment(expiresAt).diff(moment()) < 0 && refreshToken && request.headers) {
    request.headers['Authorization'] = `Bearer ${refreshToken}`;

    const {token} = await reissueToken();

    if (token) {
      setLocalStorageItem('accessToken', token.accessToken);
      setLocalStorageItem('expiresAt', moment().add(30, 'minutes').format('yyyy-MM-DD HH:mm:ss'));
      // @TODO: 쿠키 만료시간 지정
      cookies.save(REFRESH_TOKEN_KEY, token.refreshToken, {});
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
      cookies.remove(REFRESH_TOKEN_KEY);
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
