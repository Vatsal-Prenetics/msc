import React from 'react';
import {userResults} from '../../Content/Data';
import {
  NegativeMessageStyles,
  PositiveMessageStyles,
  PositiveMessageModal,
} from './MessageStyles';
import {H2} from './../ReportItems/H2';
import {resultMessage} from './../../Types/Results';

const Message: React.FC = () => {
  return (
    <div>
      {userResults.TestResult === 'Negative' ? (
        <NegativeMessageStyles>
          {resultMessage.NegativeResultMessage}
        </NegativeMessageStyles>
      ) : (
        <>
          <PositiveMessageStyles>
            {resultMessage.PositiveResultMessage}
          </PositiveMessageStyles>
          <PositiveMessageModal>
            <PositiveMessageStyles>
              <H2>Next steps for Positive</H2>
              {resultMessage.PositiveMessage}
            </PositiveMessageStyles>
          </PositiveMessageModal>
        </>
      )}
    </div>
  );
};

export default Message;
