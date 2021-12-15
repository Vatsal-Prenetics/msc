import styled from 'styled-components';
import { StyleConstants } from './../../styles/StyleConstants';

interface H2Props {
  Result?: string;
}

export const H2 = styled.h2`
  font-family: ${StyleConstants.font.regular};
  font-style: normal;
  font-weight: 500;
  font-size: ${StyleConstants.fontSize.medium};
  line-height: 25px;
  color: ${(props: H2Props) =>
    props.Result === 'Negative'
      ? StyleConstants.color.PreneticsGreen
      : StyleConstants.color.PreneticsBlack};
  /* identical to box height, or 112% */
`;
