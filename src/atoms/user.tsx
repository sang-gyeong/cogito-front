import {atom} from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
    userId: NaN,
    nickname: '',
    profileImgUrl: null,
    score: NaN,
    introduce: null,
  } as User,
});
