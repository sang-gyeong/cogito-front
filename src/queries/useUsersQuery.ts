import {useQuery} from '@tanstack/react-query';
import {getUsers} from '../api/user';

export const QUERY_KEY = 'useUsersQuery';

const useUsersQuery = ({query, page}: {query: string; page: number}) => {
  return useQuery([QUERY_KEY, query, page], () => getUsers({query, page}));
};

export default useUsersQuery;
