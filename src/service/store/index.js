import { init } from '@rematch/core';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import createLoadingPlugin from '@rematch/loading';
import createRematchPersist from '@rematch/persist';
// import models from '../models';
import test from './modules/test';

function createStore() {
  const loading = createLoadingPlugin();
  const persistPlugin = createRematchPersist({
    whitelist: ['test'],
    // throttle: 50,
    version: 1
  });
  const initialState = JSON.parse(localStorage.getItem('persist:root') || '{}');
  for (const key in initialState) {
    if (key !== '_persist') {
      initialState[key] = JSON.parse(initialState[key]);
    } else {
      delete initialState[key];
    }
  }
  console.log(initialState);
  const store = init({
    models: {
      test
    },
    redux: {
      reducers: {
        reduxAsyncConnect
      },
      initialState
      // middlewares: [...middlewares]
    },
    plugins: [loading, persistPlugin]
  });

  // if (module.hot) {
  //   // store hot reload
  //   module.hot.accept('../models', () => {
  //           const nextModels = require('../models').default // eslint-disable-line

  //     Object.keys(nextModels).forEach(modelKey => {
  //       store.model({
  //         name: modelKey,
  //         ...models[modelKey]
  //       });
  //     });
  //   });
  // }

  return store;
}

// const initHistory = JSON.parse(localStorage.getItem('state') || '{}');
// store.subscribe(() => {
//   const state = store.getState();
//   localStorage.setItem('state', JSON.stringify(state));
// });

const store = createStore();

export default store;
