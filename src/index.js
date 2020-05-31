import React from 'react';
import ReactDOM from 'react-dom';
import './constants/index.css';
import './constants/normalize.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';    
import { Provider } from 'react-redux';
import store from './middleware/store';

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root')
);