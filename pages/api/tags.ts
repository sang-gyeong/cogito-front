// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {MOCK_UP_TAGS} from '../../src/constants/data';

export default function handler(_req: NextApiRequest, res: NextApiResponse<Tag[]>) {
  res.status(200).json(MOCK_UP_TAGS);
}
