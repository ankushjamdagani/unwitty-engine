import React, { useState, useEffect } from 'react';

import FPSDebugger from './components/FPSDebugger';

const App = ({ engine: { state } }) => {
  const [abc, setAbc] = useState(1);
  useEffect(() => {
    setInterval(() => {
      setAbc(abc + 1);
    }, 100);
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
