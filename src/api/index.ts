import axios from 'axios';

const request = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  timeout: 3000,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
});

export default request;

export const getTags = (): Promise<Tag[]> => request.get<Tag[]>(`/tags`).then(response => response?.data);

export const getUsers = (): Promise<User[]> => request.get<User[]>(`/users`).then(response => response?.data);
