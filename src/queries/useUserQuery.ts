import {getMyData} from './../api/user';
import {useQuery} from '@tanstack/react-query';

export const QUERY_KEY = 'useUserQuery';

const useUserQuery = () => {
  return useQuery([QUERY_KEY], getMyData);
};

export default useUserQuery;
