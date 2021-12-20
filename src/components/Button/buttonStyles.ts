import styled from 'styled-components';
import { StyleConstants } from './../../styles/StyleConstants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  background: none;
  padding: 0.25em 0.8em;
  width: 10.8125em;
  height: 3em;
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
  color: ${StyleConstants.color.PreneticsGreen};
`;
