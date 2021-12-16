import React from 'react';
import { userResults } from '../../Content/Data';
import {
  NegativeMessageStyles,
  PositiveMessageStyles,
  PositiveMessageModal,
} from './MessageStyles';
import { H2 } from './../ReportItems/H2';
interface MessageProps {
  TestResult: string;
}

const Message = (props: MessageProps) => {
  return (
    <div>
      {props.TestResult === 'Negative' ? (
        <NegativeMessageStyles>
          {userResults.NegativeResultMessage}
        </NegativeMessageStyles>
      ) : (
        <PositiveMessageModal>
          <PositiveMessageStyles>
            <H2>Next steps for Positive</H2>
            {userResults.PositiveResultMessage}
          </PositiveMessageStyles>
        </PositiveMessageModal>
      )}
    </div>
  );
};

export default Message;
