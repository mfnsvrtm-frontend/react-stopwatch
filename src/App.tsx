import { useState } from 'react';
import Stopwatch from './components/Stopwatch';

const App = (): React.ReactNode => {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <button onClick={() => setIsRunning(!isRunning)}>
      <Stopwatch isRunning={isRunning}/>
    </button>
  );
};

export default App;