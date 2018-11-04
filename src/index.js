import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import './utils/rem';
import routes from './routes';
import './assets/styles/index.less';
import store from './service/store';
import * as serviceWorker from './utils/serviceWorker';

const persistor = getPersistor();
document.documentElement.style.fontSize = `${(window.innerWidth * 200) /
  750}px`;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Switch>{renderRoutes(routes)}</Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
