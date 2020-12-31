import React from 'react';

const FPSDebugger = ({ fps }) => (
  <div
    style={{
      color: 'white',
      padding: '8px',
      fontSize: '16px',
      fontFamily: 'monospace',
      paddingRight: '16px',
      zIndex: 111
    }}
  >
    FPS :: {fps}
  </div>
);

export default FPSDebugger;
