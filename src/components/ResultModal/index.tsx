import React from 'react';
import { Modal, ModalText } from './ResultModalStyles';

interface ResultModalProps {
  Result: string | undefined;
}

const ResultModal: React.FC<ResultModalProps> = (props: ResultModalProps) => {
  return (
    <Modal Result={props.Result}>
      <ModalText>{props.Result}</ModalText>
    </Modal>
  );
};

export default ResultModal;
