import {axiosInstanceForCSR, axiosInstanceForSSR} from './index';

interface ModifyPostItem {
  title: string;
  content: string;
  files: string[];
  tags: string[];
}

export const getPosts = (query?: string, page?: number, size?: number): Promise<Post.ListItemResponse> => {
  return axiosInstanceForSSR
    .get<Post.ListItemResponse>(`/posts`, {params: {query, page, size}})
    .then(response => response?.data);
};

export const getPostById = (id: number): Promise<Post.Item> =>
  axiosInstanceForSSR.get<Post.Item>(`/posts/${id}`).then(response => response?.data);

export const modifyPost = (id: number, body: ModifyPostItem): Promise<{}> =>
  axiosInstanceForCSR.patch(`/posts/${id}`, body);

export const deletePostById = (id: number): Promise<{}> => axiosInstanceForCSR.delete(`/posts/${id}`);
