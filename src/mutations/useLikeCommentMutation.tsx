import {useMutation, UseMutationResult, useQueryClient} from '@tanstack/react-query';
import {deleteComment, likeComment} from '../api/comment';
import {QUERY_KEY} from '../queries/usePostQuery';

export default function useLikeCommentMutation(postId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({commentId}: {commentId: number}) => await likeComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEY, {id: postId}]});
    },
  });
}
