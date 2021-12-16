import { Appstyles, Span } from './../../styles/globalStyles';
import Button from './../../components/Button/index';
import { H1 } from './../../components/H1/index';
import ResultModal from './../../components/ResultModal/index';
import Message from './../../components/Message/index';
import Report from './../../Containers/Report/index';
import Footer from './../../Containers/Footer/index';
import { userResults } from './../../Content/Data';

interface Props {}

const ResultPositive = (props: Props) => {
  return (
    <div>
      {' '}
      <Appstyles>
        <Button title='Export test Report' />
        <H1>
          Sophie's
          <br />
          <Span>Covid-19 test result is</Span>
        </H1>
        <ResultModal Result='Positive' />
        <Message TestResult={userResults.TestResult} />
        <Report />
        <Footer title='Next Steps' />
      </Appstyles>
    </div>
  );
};

export default ResultPositive;
