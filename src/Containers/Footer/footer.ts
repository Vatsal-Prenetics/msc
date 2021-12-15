import styled from 'styled-components';
import { StyleConstants } from './../../styles/StyleConstants';

export const Wrapper = styled.footer``;

/* position: absolute;
width: 343px;
height: 46px;
left: 16px;
top: 933px; */

export const FooterButton = styled.button`
  margin-top: -5.375em;
  width: 100%;
  height: 2.875em;
  background-color: ${StyleConstants.color.PreneticsGreen};
  border-radius: 6.25em;
  box-shadow: 2px 4px 30px rgba(0, 0, 0, 0.1);
  border: none;
`;

/*  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 343px;
  height: 46px;
  left: 16px;
  top: 933px;
  background: #529c6e;
  box-shadow: 2px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  
  */

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
