import styled from 'styled-components';
import { StyleConstants } from './../../styles/StyleConstants';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 2.5em;
  flex-direction: column;
  text-align: start;
  width: 100%;
  border-radius: 16px;
  background: ${StyleConstants.color.ModalGray};
  max-height: 420px;
`;

export const ReportHeader = styled.h1`
  margin-top: 1.5em;
  font-family: ${StyleConstants.font.regular};
  font-size: ${StyleConstants.fontSize.medium};
  text-align: center;
  padding-left: 0.35em;
`;

export const ReportDate = styled.div`
  padding-left: 0.35em;
  padding-top: 3em;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-height: 80%;
  margin-top: -1em;
  padding-left: 0.35em;
  padding-right: 0em;
`;
