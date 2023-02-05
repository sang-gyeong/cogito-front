import {useQuery} from '@tanstack/react-query';
import {getUsers} from '../api/user';

export const QUERY_KEY = 'useUsersQuery';

const useUsersQuery = ({query, page, size}: {query: string; page: number; size: number}) => {
  return useQuery([QUERY_KEY, query, page, size], () => getUsers(query, page, size));
};

export default useUsersQuery;
