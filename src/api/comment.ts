import {axiosInstanceForCSR, axiosInstanceForSSR} from './index';

interface CommentParams {
  postId: number;
  parentId: number | null;
  content: string;
}

export const createComment = (postId: number, parentId: number | null, content: string): Promise<{}> =>
  axiosInstanceForCSR.post<{}>(`/comments`, {postId, parentId, content}).then(response => response?.data);

export const modifyComment = (id: number, content: string): Promise<{}> =>
  axiosInstanceForCSR.patch(`/comments/${id}`, content);

export const deleteComment = (id: number): Promise<{}> => axiosInstanceForCSR.delete(`/comments/${id}/status`);

export const likeComment = (id: number): Promise<{}> => axiosInstanceForCSR.patch(`/comments/${id}/like`);

export const dislikeComment = (id: number): Promise<{}> => axiosInstanceForCSR.patch(`/comments/${id}/dislike`);

export const selectComment = (id: number): Promise<{}> => axiosInstanceForCSR.patch(`/comments/${id}/selection`);
