import styled from 'styled-components';
import { StyleConstants } from './../../styles/StyleConstants';

interface H2Props {
  Result?: string;
}

export const H2 = styled.h2`
  font-family: ${StyleConstants.font.regular};
  font-style: normal;
  margin-top: 0.1em;
  font-weight: 500;
  font-size: ${StyleConstants.fontSize.medium};
  line-height: 25px;
  color: ${StyleConstants.color.PreneticsBlack};
`;
