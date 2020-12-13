import React from 'react';

const App = ({ engine: { state } }) => {
  console.log(state.timer.fps);
  return (
    <div
      style={{
        color: 'white'
      }}
    >
      Happy debugging !
    </div>
  );
};

export default App;
