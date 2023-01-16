import {atom} from 'recoil';

export const modalShowState = atom({
  key: 'modalShowState',
  default: false,
});

export const modalState = atom({
  key: 'modalState',
  default: {
    component: <></>,
    closeCallBack: () => {},
    config: {},
  } as ModalProps,
});
