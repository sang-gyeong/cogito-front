import request from './index';

interface Body {
  title: string;
  content: string;
  files: string[];
  tags: string[];
}

export const getPosts = (query?: string, page?: number, size?: number): Promise<Post.ListItemResponse> => {
  return request.get<Post.ListItemResponse>(`/posts`, {params: {query, page, size}}).then(response => response?.data);
};

export const getPostById = (id: number): Promise<Post.Item> =>
  request.get<Post.Item>(`/posts/${id}`).then(response => response?.data);

export const createPost = (body: Body): Promise<{postId: number}> =>
  request.post<{postId: number}>('/posts', body).then(response => response?.data);

export const modifyPost = (id: number, body: Body): Promise<{}> => request.patch(`/posts/${id}`, body);

export const deletePostById = (id: number): Promise<{}> => request.delete(`/posts/${id}`);
