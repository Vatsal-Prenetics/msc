import React from 'react';
import { userResults } from './Content/Data';
import ResultNegative from './Pages/Results/ResultNegative';
import ResultPositive from './Pages/Results/ResultPositive';
import { PassportResult } from './Types/Results';

const App: React.FC = () => {
  return (
    <div>
      {userResults.TestResult === PassportResult.Negative ? (
        <ResultNegative />
      ) : (
        <ResultPositive />
      )}
    </div>
  );
};

export default App;
