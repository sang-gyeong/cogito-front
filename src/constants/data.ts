export const MOCK_UP_COMMENTS: Board.Comment[] = [
  {
    id: 1,
    content: '저도 잘 모르곘네요 ㅎㅎㅎ저도 잘 모르곘네요 ㅎㅎㅎ저도 잘 모르곘네요 ㅎㅎㅎ저도 잘 모르곘네요 ㅎㅎㅎ',
    likes: 10,
    author: {
      uid: 1,
      nickname: '삐릿뽀',
      score: 0,
      profileImgUrl:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2Fdata19%2F2006%2F10%2F29%2F75%2Fsketch3821405.png&type=sc960_832',
      badgeImgUrl: '',
    },
    createdAt: '20220102211050',
  },
  {
    id: 2,
    content:
      '안녕하세요 이 질문에 대한 답은 ㅇㅇㅇㅇ 입니다. 안녕하세요 이 질문에 대한 답은 ㅇㅇㅇㅇ 입니다.안녕하세요 이 질문에 대한 답은 ㅇㅇㅇㅇ 입니다.안녕하세요 이 질문에 대한 답은 ㅇㅇㅇㅇ 입니다.안녕하세요 이 질문에 대한 답은 ㅇㅇㅇㅇ 입니다.안녕하세요 이 질문에 대한 답은 ㅇㅇㅇㅇ 입니다.',
    likes: 10,
    author: {
      uid: 1,
      nickname: '삐릿뽀',
      score: 0,
      profileImgUrl:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2Fdata19%2F2006%2F10%2F29%2F75%2Fsketch3821405.png&type=sc960_832',
      badgeImgUrl: '',
    },
    createdAt: '20220102031050',
  },
];

export const MOCK_UP_BOARDS: Board[] = [
  {
    id: 1,
    createdAt: '20220102231050',
    title: '질문은 여기에 작성하는게 맞나?',
    content:
      'Creating a facade \n# MarkdownPreview \n## MarkdownPreview \n### MarkdownPreviewfor the Storage object is an awesome solution. That way, you can implement your own get and set methods. For my API, I have created a facade for localStorage and then check if it is an object or not while setting and getting.',
    likes: 12,
    comments: MOCK_UP_COMMENTS,
    tags: [
      {
        id: 1,
        name: 'javascript',
        createdAt: '20220102231050',
      },
      {
        id: 2,
        name: 'python',
        createdAt: '20220102231050',
      },
    ],
    author: {
      uid: 1,
      nickname: '삐릿뽀',
      score: 10,
      profileImgUrl:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2Fdata19%2F2006%2F10%2F29%2F75%2Fsketch3821405.png&type=sc960_832',
      badgeImgUrl: '',
    },
    mediaContents: [],
  },
  {
    id: 2,
    createdAt: '20220102231050',
    title: '가나다라마바사아자차카타파하',
    content:
      'Creating a facade for the Storage object is an awesome solution. That way, you can implement your own get and set methods. For my API, I have created a facade for localStorage and then check if it is an object or not while setting and getting.',
    likes: 12,
    comments: MOCK_UP_COMMENTS,
    tags: [
      {
        id: 5,
        name: 'svelte',
        createdAt: '20220102',
      },
    ],
    author: {
      uid: 2,
      nickname: '바트 심슨',
      score: 50,
      profileImgUrl:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2Fdata19%2F2006%2F10%2F29%2F75%2Fsketch3821405.png&type=sc960_832',
      badgeImgUrl: '',
    },
    mediaContents: [],
  },
  {
    id: 3,
    createdAt: '20220102231050',
    title: '12341234',
    content:
      'Creating a facade for the Storage object is an awesome solution. That way, you can implement your own get and set methods. For my API, I have created a facade for localStorage and then check if it is an object or not while setting and getting.',
    likes: 12,
    comments: MOCK_UP_COMMENTS,
    tags: [
      {
        id: 5,
        name: 'svelte',
        createdAt: '20220102',
      },
      {
        id: 6,
        name: 'node.js',
        createdAt: '20220102',
      },
      {
        id: 7,
        name: 'android',
        createdAt: '20220102',
      },
    ],
    author: {
      uid: 5,
      nickname: '마지 심슨',
      score: 35,
      profileImgUrl:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2Fdata19%2F2006%2F10%2F29%2F75%2Fsketch3821405.png&type=sc960_832',
      badgeImgUrl: '',
    },
    mediaContents: [],
  },
  {
    id: 4,
    createdAt: '20220102231050',
    title: 'ABCD',
    content:
      'Creating a facade for the Storage object is an awesome solution. That way, you can implement your own get and set methods. For my API, I have created a facade for  and then check if it is an object or not while setting and getting.',
    likes: 12,
    comments: MOCK_UP_COMMENTS,
    tags: [
      {
        id: 5,
        name: 'svelte',
        createdAt: '20220102',
      },
      {
        id: 7,
        name: 'android',
        createdAt: '20220102',
      },
    ],
    author: {
      uid: 1,
      nickname: '삐릿뽀',
      score: 0,
      profileImgUrl:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2Fdata19%2F2006%2F10%2F29%2F75%2Fsketch3821405.png&type=sc960_832',
      badgeImgUrl: '',
    },
    mediaContents: [],
  },
];

export const MOCK_UP_TAGS: Tag[] = [
  {
    id: 1,
    name: 'javascript',
    createdAt: '20220102',
  },
  {
    id: 2,
    name: 'python',
    createdAt: '20220102',
  },
  {
    id: 3,
    name: 'java',
    createdAt: '20220102',
  },
  {
    id: 4,
    name: 'c++',
    createdAt: '20220102',
  },
  {
    id: 5,
    name: 'svelte',
    createdAt: '20220102',
  },
  {
    id: 6,
    name: 'node.js',
    createdAt: '20220102',
  },
  {
    id: 7,
    name: 'android',
    createdAt: '20220102',
  },
  {
    id: 8,
    name: 'ios',
    createdAt: '20220102',
  },
  {
    id: 9,
    name: 'css',
    createdAt: '20220102',
  },
  {
    id: 10,
    name: 'sql',
    createdAt: '20220102',
  },
  {
    id: 11,
    name: 'php',
    createdAt: '20220102',
  },
];

export const MOCK_UP_USERS: User[] = [
  {
    uid: 1,
    nickname: '루피',
    score: 0,
    profileImgUrl: 'https://dimg.donga.com/i/600/0/90/egc/CDB/WEEKLY/Article/20/11/05/16/201105160500016_1.jpg',
    badgeImgUrl: '',
  },
  {
    uid: 2,
    nickname: '뽀로로',
    score: 0,
    profileImgUrl: 'https://dimg.donga.com/i/600/0/90/egc/CDB/WEEKLY/Article/20/11/05/16/201105160500016_1.jpg',
    badgeImgUrl: '',
  },
  {
    uid: 3,
    nickname: '크롱',
    score: 0,
    profileImgUrl: 'https://dimg.donga.com/i/600/0/90/egc/CDB/WEEKLY/Article/20/11/05/16/201105160500016_1.jpg',
    badgeImgUrl: '',
  },
  {
    uid: 4,
    nickname: '빽곰',
    score: 0,
    profileImgUrl: 'https://dimg.donga.com/i/600/0/90/egc/CDB/WEEKLY/Article/20/11/05/16/201105160500016_1.jpg',
    badgeImgUrl: '',
  },
  {
    uid: 5,
    nickname: '참새',
    score: 0,
    profileImgUrl: 'https://dimg.donga.com/i/600/0/90/egc/CDB/WEEKLY/Article/20/11/05/16/201105160500016_1.jpg',
    badgeImgUrl: '',
  },
];
