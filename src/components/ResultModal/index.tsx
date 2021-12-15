import React from 'react';
import { Modal, ModalText } from './ResultModalStyles';

interface ResultModalProps {
  result: string | undefined;
}

const ResultModal: React.FC<ResultModalProps> = (props: ResultModalProps) => {
  return (
    <Modal>
      <ModalText>{props.result}</ModalText>
    </Modal>
  );
};

export default ResultModal;
