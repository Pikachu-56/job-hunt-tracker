import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Job Tracker</h1>
      <h1>Hello</h1>
    </div>
  );
}

render(<App />, document.querySelector('#root'));