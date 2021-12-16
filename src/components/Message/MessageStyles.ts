import styled from 'styled-components';
import { StyleConstants } from '../../styles/StyleConstants';

export const NegativeMessageStyles = styled.p`
  width: 100%;
  height: 100px;
  margin-top: 1.5em;
  text-align: start;
  font-family: ${StyleConstants.font.regular};
  font-family: ${StyleConstants.font.regular};
  color: ${StyleConstants.color.PreneticsGray};
  font-style: normal;
  font-weight: normal;
  font-size: ${StyleConstants.fontSize.medium};
  line-height: 20px;
`;

export const PositiveMessageStyles = styled.p`
  width: 90%;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  font-family: ${StyleConstants.font.regular};
  font-family: ${StyleConstants.font.regular};
  color: ${StyleConstants.color.PreneticsGray};
  font-style: normal;
  font-weight: normal;
  font-size: ${StyleConstants.fontSize.medium};
  line-height: 20px;
`;

export const PositiveMessageModal = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 1.5em;
  text-align: start;
  justify-content: space-between;
  background: rgba(235, 87, 87, 0.16);
  border-radius: 16px;
`;
