import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RouterApp from './App';
import Store from './store/store/store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/App.css';

ReactDOM.render(
  <Provider store={Store()}>
    <RouterApp />
  </Provider>,
  document.getElementById('root')
)