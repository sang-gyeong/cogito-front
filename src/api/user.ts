import {axiosInstanceForCSR} from './index';

interface Body {
  nickname: string;
  profileImgUrl: string;
  introduce: string;
}

export const getMyData = (): Promise<User> => {
  return axiosInstanceForCSR.get<User>(`/users/me`).then(response => {
    return response?.data;
  });
};

export const getUserDataById = (userId: number): Promise<User> =>
  axiosInstanceForCSR.get<User>(`/users/${userId}`).then(response => response?.data);

export const modifyUserData = (userId: number, body: Body): Promise<User> =>
  axiosInstanceForCSR.patch<User>(`/users/${userId}`, body).then(response => response?.data);
