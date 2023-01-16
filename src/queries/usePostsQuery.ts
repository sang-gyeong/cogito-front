import {useQuery} from '@tanstack/react-query';
import {getPosts} from '../api/post';

export const QUERY_KEY = 'usePostsQuery';

const usePostsQuery = ({query = '', page = 0, size = 15}: {query?: string; page?: number; size?: number}) => {
  return useQuery([QUERY_KEY, query, page, size], () => getPosts(query, page, size));
};

export default usePostsQuery;
