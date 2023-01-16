import {useQuery} from '@tanstack/react-query';
import {getPostById} from '../api/post';

export const QUERY_KEY = 'getPostById';

const usePostQuery = (id: number) => {
  return useQuery([QUERY_KEY, {id}], () => getPostById(id));
};

export default usePostQuery;
