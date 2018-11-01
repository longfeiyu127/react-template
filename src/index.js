import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Demo from './views/demo';
import store from './service/store';
import * as serviceWorker from './utils/serviceWorker';

document.documentElement.style.fontSize = `${(window.innerWidth * 100) /
  750}px`;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={App} />
        <Route path="/games" component={Demo} />
        <Route exact path="/routeDemo" component={App} />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
    {/* <BrowserRouter> */}
    {/* <App /> */}
    {/* </BrowserRouter> */}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
