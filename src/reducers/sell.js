import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
  status: 'INIT',
  error: -1
};

export default function sell(state, action) {
  if (typeof state === 'undefined') {
    state = initialState;
  }

  switch (action.type) {
    case types.SELL_POST:
      return update(state, {
        status: { $set: 'WAITING' },
        error: { $set: -1 }
      });
    case types.SELL_POST_SUCCESS:
      return update(state, {
        status: { $set: 'SUCCESS' }
      });
    case types.SELL_POST_FAILURE:
      return update(state, {
        status: { $set: 'FAILURE' },
        error: { $set: action.error }
      });
    default:
      return state;
  }
}
