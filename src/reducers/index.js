import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { mainReducer } from './mainReducer';

console.log(mainReducer);
console.log('MAIN REDUCER')
const rootReducer = combineReducers({
  routing: routeReducer,
  /* your reducers */
  league: mainReducer,
});

export default rootReducer;
