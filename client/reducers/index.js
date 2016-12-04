import { combineReducers } from 'redux';
import FiveDayReducer from './reducer_five_day';
import Current from './reducer_current';

const rootReducer = combineReducers({
  fiveDay: FiveDayReducer,
  current: Current
});

export default rootReducer;
