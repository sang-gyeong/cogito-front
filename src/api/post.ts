import {axiosInstanceForSSR, axiosInstanceForCSR} from './index';

interface Body {
  title: string;
  content: string;
  files: string[];
  tags: string[];
}

export const getPosts = ({query, page}: {query: string; page: number}): Promise<Post.ListItemResponse> => {
  return axiosInstanceForSSR.get<Post.ListItemResponse>(`/posts`, {params: {query, page}}).then(response => {
    return response?.data;
  });
};

export const getPostById = (id: number): Promise<Post.Item> =>
  axiosInstanceForSSR.get<Post.Item>(`/posts/${id}`).then(response => response?.data);

export const createPost = (body: Body): Promise<{postId: number}> =>
  axiosInstanceForCSR.post<{postId: number}>('/posts', body).then(response => response?.data);

export const modifyPost = (id: number, body: Body): Promise<{}> => axiosInstanceForCSR.patch(`/posts/${id}`, body);

export const deletePostById = (id: number): Promise<{}> => axiosInstanceForCSR.delete(`/posts/${id}`);
