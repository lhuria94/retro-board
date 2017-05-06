import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Auth from './components/Auth';
import Provider from './components/Provider';

ReactDOM.render(
  <Provider><Auth /></Provider>,
  document.getElementById('app')
);
