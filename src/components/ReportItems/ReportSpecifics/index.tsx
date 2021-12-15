import React from 'react';
import { H2 } from '../H2';
import { H3 } from '../H3';
import { Inner, Wrapper } from './reportSpecificsStyles';

interface ReportSpecificsProps {
  Feild: string;
  Value: string;
  Result?: string;
}

const ReportSpecifics: React.FC<ReportSpecificsProps> = (
  props: ReportSpecificsProps
) => {
  return (
    <Wrapper>
      <Inner>
        <H3>{props.Feild}</H3>
        <H2 Result={props.Result}>{props.Value}</H2>
      </Inner>
    </Wrapper>
  );
};

export default ReportSpecifics;
