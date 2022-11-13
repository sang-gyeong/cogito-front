// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse<Board[]>) {
  res.status(200).json(MOCK_UP_DATA);
}

const MOCK_UP_DATA: Board[] = [
  {
    id: 1,
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
  },
  {
    id: 2,
    title: '가나다라마바사아자차카타파하',
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
  },
  {
    id: 3,
    title: '가나다라마바사아자차카타파하',
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
  },
  {
    id: 4,
    title: '가나다라마바사아자차카타파하',
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
  },
];
