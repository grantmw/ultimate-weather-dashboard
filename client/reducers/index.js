import { combineReducers } from 'redux';
import FiveDayReducer from './reducer_five_day';

const rootReducer = combineReducers({
  fiveDay: FiveDayReducer 
});

export default rootReducer;
