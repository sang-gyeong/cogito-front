declare interface ModalProps {
  isShow: boolean;
  title: string;
  component: ReactElement;
  config: {
    size: 'sm' | 'lg';
    closeButton: boolean;
    centered: boolean;
  };
  closeCallBack: () => void;
}
