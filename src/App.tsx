import React from 'react';
import { userResults } from './Content/Data';
import ResultNegative from './Pages/Results/ResultNegative';
import ResultPositive from './Pages/Results/ResultPositive';

const App: React.FC = () => {
  return (
    <div>
      {userResults.TestResult === 'Negative' ? (
        <ResultNegative />
      ) : (
        <ResultPositive />
      )}
    </div>
  );
};

export default App;
