import {useQuery} from '@tanstack/react-query';
import {getBoards} from '../api';

export const QUERY_KEY = '/boards';

const useBoardsQuery = () => {
  return useQuery([QUERY_KEY], getBoards);
};

export default useBoardsQuery;
