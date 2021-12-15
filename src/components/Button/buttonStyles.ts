import styled from 'styled-components';
import { StyleConstants } from './../../styles/StyleConstants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 4.688em;
`;

export const ButtonButton = styled.button`
  flex-direction: row;
  margin-bottom: 4.688em;
  justify-content: flex-end;

  background: none;
  text-decoration: underline;
  width: 157px;
  height: 36px;

  text-align: center;
  align-items: center;
  border: 1px solid #529c6e;
  box-sizing: border-box;
  border-radius: 40px;
  color: #529c6e;
`;

export const ButtonText = styled.p`
  font-family: ${StyleConstants.font.regular};
  font-style: normal;
  font-weight: normal;
  font-size: ${StyleConstants.fontSize.xSmall};
  line-height: 15px;
  text-align: center;

  color: #529c6e;
`;
