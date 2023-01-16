import {ReactElement} from 'react';
import {useRecoilState, atom} from 'recoil';
import {modalShowState} from '../atoms/modal';
import Modal from '../components/Modal';

export function useModal({}) {
  const [showModal, setShowModal] = useRecoilState(modalShowState);
}
