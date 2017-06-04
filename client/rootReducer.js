import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';

//this adds and stores info to the redux 'store'
export default combineReducers({
  flashMessages,
  auth
});
