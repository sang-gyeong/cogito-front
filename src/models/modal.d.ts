declare interface ModalProps {
  title: string;
  component: ReactElement;
  config: {
    size: 'sm' | 'lg';
    closeButton: boolean;
    centered: boolean;
  };
  closeCallBack: () => void;
}
