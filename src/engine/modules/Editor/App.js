import React, { useState, useEffect } from 'react';

import FPSDebugger from './components/FPSDebugger';

const App = ({ engine: { state } }) => {
  const [, setAbc] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setAbc((abc) => abc + 1);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        color: 'white'
      }}
    >
      <FPSDebugger fps={state.timer.fps} />
    </div>
  );
};

export default App;
