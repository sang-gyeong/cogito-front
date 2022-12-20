import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 3000,
});

request.interceptors.request.use(
  config => {
    // 요청을 보내기 전에 수행할 로직
    return config;
  },
  error => {
    // 요청 에러가 발생했을 때 수행할 로직
    console.log('error : ', error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    // 응답에 대한 로직 작성
    // const {data} = response;
    // return data;
    return response;
  },
  error => {
    // 응답 에러가 발생했을 때 수행할 로직
    console.log('error : ', error);
    return Promise.reject(error);
  }
);

export default request;

export const getBoards = (): Promise<Board[]> => request.get<Board[]>(`/boards`).then(response => response.data);

export const getBoardById = (id: number): Promise<Board> =>
  request.get<Board>(`/board/${id}`).then(response => response.data);

export const getTags = (): Promise<Tag[]> => request.get<Tag[]>(`/tags`).then(response => response.data);

export const getUsers = (): Promise<User[]> => request.get<User[]>(`/users`).then(response => response.data);
