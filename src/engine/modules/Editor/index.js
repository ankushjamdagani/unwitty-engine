import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';

async function mountEditor(id, engine) {
  // const pr = new Proxy(engine, {
  //   get: (...args) => {
  //     console.log(args);
  //   }
  // });
  // Object.observe(engine, (changes) => {
  //   console.log(changes);
  // });
  setTimeout(() => {
    ReactDOM.render(<App engine={engine} />, document.getElementById(id));
  }, 100);
}

export default mountEditor;
