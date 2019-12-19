

import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  // We can add as many reducers as we need here.
});

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};