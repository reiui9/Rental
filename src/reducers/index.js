import authentication from './authentication';
import memo from './memo';
import search from './search';
import sell from './sell';

import { combineReducers } from 'redux';

export default combineReducers({
  authentication,
  memo,
  search,
  sell
});
