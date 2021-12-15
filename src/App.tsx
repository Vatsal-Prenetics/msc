import React from 'react';
import { Appstyles, Span } from './styles/globalStyles';
import { H1 } from './components/H1/index';
import Button from './components/Button/index';
import ResultModal from './components/ResultModal/index';
import Message from './components/Message/index';
import { userResults } from './Content/Data';
import Report from './Containers/Report/index';
import Footer from './Containers/Footer/index';

const App: React.FC = () => {
  return (
    <div>
      <Appstyles>
        <Button title='Export test Report' />
        <H1>
          Sophie's
          <br />
          <Span>Covid-19 test result is</Span>
        </H1>
        <ResultModal result='Negative' />
        <Message ResultMessage={userResults.ResultMessage} />
        <Report />
        <Footer title='Next Steps' />
      </Appstyles>
    </div>
  );
};

export default App;
