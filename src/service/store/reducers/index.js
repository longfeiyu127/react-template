import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import board from './board';
import ranking from './ranking';
import test from './test';

export default combineReducers({
  board: undoable(board, {
    limit: 11 // set a limit for the history
  }),
  ranking,
  test
});
