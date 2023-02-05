import {useMutation, UseMutationResult, useQueryClient} from '@tanstack/react-query';
import {deleteComment, dislikeComment, likeComment} from '../api/comment';
import {QUERY_KEY} from '../queries/usePostQuery';

export default function useDislikeCommentMutation(postId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({commentId}: {commentId: number}) => await dislikeComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEY, {id: postId}]});
    },
  });
}
