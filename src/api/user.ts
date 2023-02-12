import {axiosInstanceForCSR, axiosInstanceForSSR} from './index';

interface Body {
  nickname: string;
  profileImgUrl: string;
  introduce: string;
}

// 마이 프로필 조회
export const getMyData = (): Promise<User> => {
  return axiosInstanceForCSR.get<User>(`/users/me`).then(response => {
    return response?.data;
  });
};

// 유저 프로필 조회
export const getUserDataById = (userId: number): Promise<User> =>
  axiosInstanceForSSR.get<User>(`/users/${userId}`).then(response => response?.data);

// 유저 프로필 수정
export const modifyUserData = (userId: number, body: Body): Promise<User> =>
  axiosInstanceForCSR.patch<User>(`/users/${userId}`, body).then(response => response?.data);

// 유저 순위 조회
export const getUsers = ({query, page}: {query: string; page: number}): Promise<{users: User[]; total: number}> =>
  axiosInstanceForSSR
    .get<{users: User[]; total: number}>(`/users`, {params: {query, page}})
    .then(response => response?.data);
