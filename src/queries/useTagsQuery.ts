import {useQuery} from '@tanstack/react-query';
import {getTags} from '../api';

export const QUERY_KEY = '/tags';

const useTagsQuery = () => {
  return useQuery([QUERY_KEY], getTags);
};

export default useTagsQuery;
