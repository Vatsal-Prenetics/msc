import {
  InnerWrapper,
  Wrapper,
  ReportHeader,
  ReportDate,
} from './ReportStyles';
import ReportSpecifics from './../../components/ReportItems/ReportSpecifics/index';
import { userResults } from '../../Content/Data';

const Report: React.FC = () => {
  return (
    <>
      <Wrapper>
        <ReportHeader> Covid-19 Test Details</ReportHeader>

        <ReportDate style={{ display: 'inline-block', paddingTop: '48px' }}>
          <ReportSpecifics
            Feild='Result Reported On'
            Value={userResults.DateOfResultReported}
          />
        </ReportDate>

        <InnerWrapper>
          <ReportSpecifics Feild='Pod Name' Value={userResults.DeviceType} />
          <ReportSpecifics
            Feild='Name'
            Value={userResults.FirstName + ' ' + userResults.LastName}
          />
          <ReportSpecifics
            Feild='ModelNumber'
            Value={userResults.ModelNumber}
          />
          <ReportSpecifics
            Feild='Capsule Number'
            Value={userResults.CapsuleNumber}
          />
          <ReportSpecifics
            Feild='Test Result'
            Value={userResults.TestResult}
            Result={userResults.TestResult}
          />

          <ReportSpecifics Feild='Gender' Value={userResults.Gender} />

          <ReportSpecifics
            Feild='Serial Number'
            Value={userResults.SerialNumber}
          />
        </InnerWrapper>
      </Wrapper>{' '}
    </>
  );
};

export default Report;
