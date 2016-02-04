import { combineReducers } from 'redux';
import platePosition from './plate-position';

const hanoiReducer = combineReducers({
  platePosition
});

export default hanoiReducer;
