import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import App from './components/App';

const el = document.createElement('div');
document.body.appendChild(el);

ReactDOM.render(
  <App />, el
);
