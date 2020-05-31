import React from 'react';

import Store from './Desktop/Store/Store'
import st from './App.module.scss';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Store />
    </Router>
  );
}

export default App;
