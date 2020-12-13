import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';

async function mountDebugger(id) {
  setTimeout(() => {
    ReactDOM.render(<App />, document.getElementById(id));
  }, 100);
}

export default mountDebugger;
