import {useQuery} from '@tanstack/react-query';
import {getTags} from '../api';

export const QUERY_KEY = 'useTagsQuery';

const useTagsQuery = () => {
  return useQuery([QUERY_KEY], getTags);
};

export default useTagsQuery;
