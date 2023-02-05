import {useMutation, UseMutationResult, useQueryClient} from '@tanstack/react-query';
import {createComment} from '../api/comment';
import {QUERY_KEY} from '../queries/usePostQuery';

export default function useAddTodoMutation(postId: number) {
  const queryClient = useQueryClient();

  return useMutation(
    async ({postId, parentId, content}: {postId: number; parentId: number | null; content: string}) =>
      await createComment({postId, parentId, content}),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: [QUERY_KEY, {id: postId}]});
      },
    }
  );
}
