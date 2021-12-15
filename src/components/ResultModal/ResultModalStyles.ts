import styled from 'styled-components';
import { StyleConstants } from './../../styles/StyleConstants';

export const Modal = styled.div`
  display: flex;
  background: ${StyleConstants.color.PreneticsGreen};
  width: 100%;
  height: 100%;
  border-radius: 16px;
  text-align: center;
  justify-content: center;
  margin-top: 1.5em;
`;

export const ModalText = styled.div`
  font-family: ${StyleConstants.font.regular};
  font-style: normal;
  font-weight: Light;
  font-size: ${StyleConstants.fontSize.large};
  line-height: 40px;
  /* identical to box height, or 125% */
  padding: 25px;
  text-align: center;

  color: #ffffff;
`;

/* position: absolute;
  margin-top: 10px;
  display: flex;
  width: 327px;
  height: 88px;
  left: 24px;
  top: 259px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: #529c6e;
  border-radius: 16px; */
