import {useEffect} from 'react';
import {Modal as BSModal, Button} from 'react-bootstrap';
import {useRecoilState, useRecoilValue} from 'recoil';
import {modalShowState, modalState} from '../../atoms/modal';

export default function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalShowState);
  const {title, component, closeCallBack, config} = useRecoilValue(modalState);

  useEffect(() => {
    return () => closeCallBack();
  }, [showModal, closeCallBack]);

  const handleClose = () => setShowModal(false);

  const modalConfig: ModalProps['config'] = {
    size: config.size ?? 'lg',
    closeButton: !!config?.closeButton,
    centered: !!config?.centered,
  };

  return (
    <>
      <BSModal size={modalConfig.size} show={showModal} onHide={handleClose} centered={modalConfig.centered}>
        <BSModal.Header closeButton={modalConfig.closeButton}>
          <BSModal.Title>{title}</BSModal.Title>
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

// <div
// className="modal fade"
// id="logoutModal"
// tabIndex={-1}
// role="dialog"
// aria-labelledby="exampleModalLabel"
// aria-hidden="true">
// <div className="modal-dialog" role="document">
//   <div className="modal-content">
//     <div className="modal-header">
//       <h5 className="modal-title" id="exampleModalLabel">
//         Ready to Leave?
//       </h5>
//       <button className="close" type="button" data-dismiss="modal" aria-label="Close">
//         <span aria-hidden="true">×</span>
//       </button>
//     </div>
//     <div className="modal-body">Select Logout below if you are ready to end your current session.</div>
//     <div className="modal-footer">
//       <button className="btn btn-secondary" type="button" data-dismiss="modal">
//         Cancel
//       </button>
//       <a className="btn btn-primary" href="login.html">
//         Logout
//       </a>
//     </div>
//   </div>
// </div>
// </div>
