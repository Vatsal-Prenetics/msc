import styled from 'styled-components';
import { StyleConstants } from './../../styles/StyleConstants';

export const H2 = styled.h2`
  font-family: ${StyleConstants.font.regular};
  font-style: normal;
  margin-top: 0.1em;
  font-weight: 500;
  font-size: ${StyleConstants.fontSize.medium};
  line-height: 25px;
  color:${(props) =>
    props.color === 'Negative'
      ? StyleConstants.color.PreneticsGreen
      : StyleConstants.color.PreneticsBlack}; }
      

   color:${(props) =>
     props.color === 'Positive'
       ? StyleConstants.color.PreneticsRed
       : StyleConstants.color.PreneticsBlack}; }
`;
