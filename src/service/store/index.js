import { init } from '@rematch/core';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import createLoadingPlugin from '@rematch/loading';
import createRematchPersist from '@rematch/persist';
import models from './modules';

function createStore() {
  const loading = createLoadingPlugin();
  const persistPlugin = createRematchPersist({
    whitelist: ['test', 'Tictactoe', 'Fivechess', 'Lightning'],
    throttle: 15,
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
  const store = init({
    models,
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

const store = createStore();

// console.log(store.dispatch(store));
/**
 * dispatch => ({
  // setTest: data => dispatch({ type: 'SET_TEST_TEST', data }),
  setTest: dispatch.test.setTest,
  getTest: dispatch.test.getTest
  // onGetRankingList: () => dispatch({ type: 'GET_RANKLING_LIST' })
}
 */
console.log(store);
console.log(models);

export default store;
