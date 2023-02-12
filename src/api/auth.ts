import {getLocalStorageItem} from './../utils/storage';
import axios from 'axios';
import {axiosInstanceForCSR} from './index';

interface tokenResponse {
  accessToken: string;
  registered: boolean;
}

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async request => {
  const accessToken = getLocalStorageItem('accessToken', '');

  if (request.headers && accessToken) {
    request.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return request;
});

export const getAccessToken = (host: string, authToken: string): Promise<tokenResponse> =>
  axiosInstanceForCSR
    .get<tokenResponse>(`/auth/${host}/login/token?code=${authToken}`)
    .then(response => response?.data);

export const reissueToken = (): Promise<{accessToken: string}> =>
  axiosInstance.post<{accessToken: string}>('/auth/reissue').then(response => {
    return response?.data;
  });

export const logout = (): Promise<void> =>
  axiosInstanceForCSR.post<void>('/auth/logout').then(() => console.log('로그아웃 되었습니다.'));
