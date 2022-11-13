import {useQuery} from '@tanstack/react-query';
import {getBoardById} from '../api';

export const QUERY_KEY = '/board';

const useBoardQuery = (id: number) => {
  return useQuery([QUERY_KEY, {id}], () => getBoardById(id));
};

export default useBoardQuery;
