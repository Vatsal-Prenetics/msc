import React from 'react';
import {userResults} from '../../Content/Data';
import {Modal, ModalText} from './ResultModalStyles';
import {capitalizeTxt} from './../../Helpers/capitalize';

const ResultModal: React.FC = () => {
  return (
    <Modal Result={userResults.TestResult}>
      <ModalText>{userResults.TestResult}</ModalText>
    </Modal>
  );
};

export default ResultModal;
