import {axiosInstanceForCSR} from './index';

interface tokenResponse {
  accessToken: string;
  refreshToken: string;
}

export const getAccessToken = (host: string, authToken: string): Promise<tokenResponse> =>
  axiosInstanceForCSR
    .get<tokenResponse>(`/auth/${host}/login/token?code=${authToken}`)
    .then(response => response?.data);

export const reissueToken = (): Promise<tokenResponse> =>
  axiosInstanceForCSR.get<tokenResponse>('/auth/reissue').then(response => response?.data);
