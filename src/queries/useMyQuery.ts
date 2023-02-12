import {getMyData} from './../api/user';
import {useQuery} from '@tanstack/react-query';

export const QUERY_KEY = 'useMyQuery';

const useMyQuery = () => {
  return useQuery([QUERY_KEY], getMyData);
};

export default useMyQuery;
