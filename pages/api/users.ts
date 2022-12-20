import {MOCK_UP_USERS} from './../../src/constants/data';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse<User[]>) {
  res.status(200).json(MOCK_UP_USERS);
}
