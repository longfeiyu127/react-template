import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import routes from './routes';
import './index.css';
// import App from './App';
// import Home from './views/home';
// import Demo from './views/demo';
// import store from './service/store';
import store from './service/store/i';
import * as serviceWorker from './utils/serviceWorker';

document.documentElement.style.fontSize = `${(window.innerWidth * 100) /
  750}px`;
console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {renderRoutes(routes)}
        {/* <Route exact path="/index" component={App} />
        <Route exact path="/home" component={Home} />
        <Route path="/games" component={Demo} />
        <Route exact path="/routeDemo" component={App} />
        <Redirect from="/" to="/home" /> */}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
