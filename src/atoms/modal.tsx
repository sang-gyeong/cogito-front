import {atom} from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: {
    isShow: false,
    component: <></>,
    closeCallBack: () => {},
    config: {},
  } as ModalProps,
});
