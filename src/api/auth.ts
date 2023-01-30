import axios from 'axios';
import {axiosInstanceForCSR} from './index';

interface tokenResponse {
  accessToken: string;
  registered: boolean;
}

export const getAccessToken = (host: string, authToken: string): Promise<tokenResponse> =>
  axiosInstanceForCSR
    .get<tokenResponse>(`/auth/${host}/login/token?code=${authToken}`)
    .then(response => response?.data);

export const reissueToken = (accessToken: string | null): Promise<{accessToken: string}> =>
  axios
    .post<{accessToken: string}>(
      '/auth/reissue',
      {},
      {
        headers: {
          timeout: 3000,
          withCredentials: true,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then(response => {
      console.log('===');
      return response?.data;
    });

export const logout = (): Promise<void> =>
  axiosInstanceForCSR.post<void>('/auth/logout').then(() => console.log('로그아웃 되었습니다.'));
