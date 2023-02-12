import {getUserDataById} from './../api/user';
import {useQuery} from '@tanstack/react-query';

export const QUERY_KEY = 'useUserQuery';

const useUserQuery = (userId: number) => {
  return useQuery([QUERY_KEY, {id: userId}], () => getUserDataById(userId));
};

export default useUserQuery;
