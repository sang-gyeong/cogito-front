import {useQuery} from '@tanstack/react-query';
import {getUsers} from '../api';

export const QUERY_KEY = '/users';

const useUsersQuery = () => {
  return useQuery([QUERY_KEY], getUsers);
};

export default useUsersQuery;
