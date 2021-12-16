import React from 'react';
import { userResults } from '../../Content/Data';
import {
  NegativeMessageStyles,
  PositiveMessageStyles,
  PositiveMessageModal,
} from './MessageStyles';
import { H2 } from './../ReportItems/H2';

const Message = () => {
  return (
    <div>
      {userResults.TestResult === 'Negative' ? (
        <NegativeMessageStyles>
          {userResults.NegativeResultMessage}
        </NegativeMessageStyles>
      ) : (
        <>
          <PositiveMessageStyles>
            {userResults.PositiveResultMessage}
          </PositiveMessageStyles>
          <PositiveMessageModal>
            <PositiveMessageStyles>
              <H2>Next steps for Positive</H2>
              {userResults.PositiveMessage}
            </PositiveMessageStyles>
          </PositiveMessageModal>
        </>
      )}
    </div>
  );
};

export default Message;
