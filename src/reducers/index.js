import { combineReducers } from 'redux';
import stores from './store';
import app from './app';

const rootReducer = combineReducers({
  app,
  stores
});

export default rootReducer;