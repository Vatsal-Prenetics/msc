import { Appstyles, Span } from './../../styles/globalStyles';
import Button from './../../components/Button/index';
import { H1 } from './../../components/H1/index';
import ResultModal from './../../components/ResultModal/index';
import Message from './../../components/Message/index';
import Report from './../../Containers/Report/index';
import Footer from './../../Containers/Footer/index';
import { userResults } from '../../Content/Data';

const ResultPositive: React.FC = () => {
  return (
    <div>
      <Appstyles>
        <Button title='Export test Report' />
        <H1>
          {userResults.FirstName}'s
          <br />
          <Span>Covid-19 test result is</Span>
        </H1>
        <ResultModal />
        <Message />
        <Report />
        <Footer title='Next Steps' />
      </Appstyles>
    </div>
  );
};

export default ResultPositive;
