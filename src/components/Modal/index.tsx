import {useEffect} from 'react';
import {Modal as BSModal, Button} from 'react-bootstrap';
import {useRecoilState} from 'recoil';
import {modalState} from '../../atoms/modal';

export default function Modal() {
  const [_modalState, setModalState] = useRecoilState(modalState);
  const {isShow, title, component, closeCallBack, config} = _modalState;

  useEffect(() => {
    return () => closeCallBack();
  }, [closeCallBack]);

  const handleClose = () => setModalState({..._modalState, isShow: false});

  const modalConfig: ModalProps['config'] = {
    size: config.size ?? 'lg',
    closeButton: !!config?.closeButton,
    centered: !!config?.centered,
  };

  return (
    <>
      <BSModal size={modalConfig.size} show={isShow} onHide={handleClose} centered={modalConfig.centered}>
        <BSModal.Header closeButton={modalConfig.closeButton}>
          <BSModal.Title style={{color: '#303d62', fontWeight: '500'}}>{title}</BSModal.Title>
        </BSModal.Header>
        <BSModal.Body>{component}</BSModal.Body>
        <BSModal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="primary" onClick={handleClose}>
            확인
          </Button>
        </BSModal.Footer>
      </BSModal>
    </>
  );
}
