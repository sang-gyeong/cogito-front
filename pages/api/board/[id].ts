// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<Board>) {
  const {id} = req.query;

  return res.status(200).json({
    id: Number(id),
    title: '질문은 여기에 작성하는게 맞나?',
    content:
      'Creating a facade for the Storage object is an awesome solution. That way, you can implement your own get and set methods. For my API, I have created a facade for localStorage and then check if it is an object or not while setting and getting.',
    likes: 12,
    comments: [],
    tags: [],
    author: {
      uid: 1,
      nickname: '삐릿뽀',
      score: 10,
      profileImgUrl: '',
      badgeImgUrl: '',
    },
    mediaContents: [],
  });
}
