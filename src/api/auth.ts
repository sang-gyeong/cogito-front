import {axiosInstanceForCSR} from './index';

interface tokenResponse {
  token: {accessToken: string; refreshToken: string};
  registered: boolean;
}

export const getAccessToken = (host: string, authToken: string): Promise<tokenResponse> =>
  axiosInstanceForCSR
    .get<tokenResponse>(`/auth/${host}/login/token?code=${authToken}`)
    .then(response => response?.data);

export const reissueToken = (): Promise<tokenResponse> =>
  axiosInstanceForCSR.get<tokenResponse>('/auth/reissue').then(response => response?.data);

export const logout = (): Promise<void> =>
  axiosInstanceForCSR.post<void>('/auth/logout').then(() => console.log('로그아웃 되었습니다.'));
