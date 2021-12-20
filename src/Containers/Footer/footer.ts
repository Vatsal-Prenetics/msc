import styled from 'styled-components';
import { StyleConstants } from './../../styles/StyleConstants';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 1.6em 0 2em 0;
`;

export const FooterButton = styled.button`
  width: 100%;
  height: 3.5em;
  background-color: ${StyleConstants.color.PreneticsGreen};
  border-radius: 6.25em;
  box-shadow: 2px 4px 30px rgba(0, 0, 0, 0.1);
  border: none;
`;

export const FooterText = styled.p`
  font-family: ${StyleConstants.font.regular};
  font-style: normal;
  font-weight: normal;
  font-size: ${StyleConstants.fontSize.medium};
  line-height: 22px;
  /* identical to box height, or 137% */

  text-align: center;

  color: ${StyleConstants.color.ModalWhite}; ;
`;
