import { Appstyles, Span } from './../../styles/globalStyles';
import { H1 } from './../../components/H1/index';
import ResultModal from './../../components/ResultModal/index';
import Message from './../../components/Message/index';
import Report from './../../Containers/Report/index';
import Footer from './../../Containers/Footer/index';
import { userResults } from '../../Content/Data';
import { Header } from './Header';

const ResultPositive: React.FC = () => {
  return (
    <div>
      <Appstyles>
        <Header />
        <H1>
          {userResults.FirstName}'s
          <br />
          <Span>Covid-19 test result is</Span>
        </H1>
        <ResultModal />
        <Message />
        <Report />
        <Footer title="Next Steps" />
      </Appstyles>
    </div>
  );
};

export default ResultPositive;
