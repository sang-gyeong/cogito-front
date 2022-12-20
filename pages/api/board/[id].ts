// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {MOCK_UP_BOARDS} from '../../../src/constants/data';

export default function handler(req: NextApiRequest, res: NextApiResponse<Board>) {
  const {id} = req.query;

  const boardData = MOCK_UP_BOARDS[Number(id) - 1];

  return res.status(200).json(boardData);
}
