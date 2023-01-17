import {useQuery} from '@tanstack/react-query';
import {getPosts} from '../api/post';

export const QUERY_KEY = 'usePostsQuery';

const usePostsQuery = ({query, page}: {query: string; page: number}) => {
  return useQuery([QUERY_KEY, query, page], () => getPosts({query, page}));
};

export default usePostsQuery;
