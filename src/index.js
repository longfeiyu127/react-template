import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './service/store';
import * as serviceWorker from './utils/serviceWorker';

document.documentElement.style.fontSize = `${(window.innerWidth * 100) /
  750}px`;

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
