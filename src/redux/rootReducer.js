import { combineReducers } from 'redux';

import campersReducer from './campers/slice';

const rootReducer = combineReducers({
  campers: campersReducer,
});

export default rootReducer;
