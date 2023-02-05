import {useMutation, UseMutationResult, useQueryClient} from '@tanstack/react-query';
import {deleteComment} from '../api/comment';
import {QUERY_KEY} from '../queries/usePostQuery';

export default function useDeleteCommentMutation(postId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({commentId}: {commentId: number}) => await deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEY, {id: postId}]});
    },
  });
}
