import { combineReducers } from 'redux';
import user from './user';
import post from './post'
import flash from './flash';

const rootReducer = combineReducers({
  user,
  post,
  flash
});

export default rootReducer;
