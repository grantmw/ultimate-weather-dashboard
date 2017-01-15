import { combineReducers } from 'redux';
import FiveDayReducer from './reducer_five_day';
import Current from './reducer_current';
import Search_Error from './reducer_error';

const rootReducer = combineReducers({
  fiveDay: FiveDayReducer,
  current: Current,
  searchError: Search_Error
});

export default rootReducer;
