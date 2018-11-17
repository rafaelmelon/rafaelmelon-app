import { combineReducers } from 'redux';
import repositories from './repositories/reducer';
import user from './user/reducer';

const rootReducer = combineReducers({
  repositories,
  user
});

export default rootReducer;
