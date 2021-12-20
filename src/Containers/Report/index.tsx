import {
  Dividend,
  InnerWrapper,
  Wrapper,
  ReportHeader,
  ReportDate,
} from './ReportStyles';
import ReportSpecifics from './../../components/ReportItems/ReportSpecifics/index';
import {userResults} from '../../Content/Data';

const Report: React.FC = () => {
  return (
    <>
      <Wrapper>
        <ReportHeader> Covid-19 Test Details</ReportHeader>
        <Dividend />
        <ReportDate style={{display: 'inline-block', paddingTop: '36px'}}>
          <ReportSpecifics
            Field='Result Reported On'
            Value={userResults.DateOfResultReported}
          />
        </ReportDate>

        <InnerWrapper>
          {userResults.DeviceType ? (
            <ReportSpecifics Field='Pod Name' Value={userResults.DeviceType} />
          ) : null}

          <ReportSpecifics Field='Name' Value={userResults.FullName} />
          {userResults.ModelNumber ? (
            <ReportSpecifics
              Field='ModelNumber'
              Value={userResults.ModelNumber}
            />
          ) : null}

          <ReportSpecifics
            Field='Capsule Number'
            Value={userResults.CapsuleNumber}
          />
          <ReportSpecifics
            Field='Test Result'
            Value={userResults.TestResult}
            Result={userResults.TestResult}
          />

          <ReportSpecifics Field='Gender' Value={userResults.Gender} />
          {userResults.SerialNumber ? (
            <ReportSpecifics
              Field='Serial Number'
              Value={userResults.SerialNumber}
            />
          ) : null}
        </InnerWrapper>
      </Wrapper>{' '}
    </>
  );
};

export default Report;
