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

export const createPost = (
  title: string,
  content: string,
  files: string[],
  tags: string[]
): Promise<{postId: number}> =>
  axiosInstanceForCSR.post<{postId: number}>('/posts', {title, content, files, tags}).then(response => response?.data);

export const modifyPost = (id: number, body: Body): Promise<{}> => axiosInstanceForCSR.patch(`/posts/${id}`, body);

export const deletePostById = (id: number): Promise<{}> => axiosInstanceForCSR.delete(`/posts/${id}`);

export const likePost = (id: number): Promise<{}> => axiosInstanceForCSR.patch(`/posts/${id}/like`);

export const dislikePost = (id: number): Promise<{}> => axiosInstanceForCSR.patch(`/posts/${id}/dislike`);
