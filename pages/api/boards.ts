// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {MOCK_UP_BOARDS} from '../../src/constants/data';

export default function handler(_req: NextApiRequest, res: NextApiResponse<Board[]>) {
  res.status(200).json(MOCK_UP_BOARDS);
}
