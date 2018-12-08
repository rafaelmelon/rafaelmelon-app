import { Reducer } from 'redux';
import { UserState, UserActionTypes } from './types';

const initialState: UserState = {
  user: {},
  error: undefined,
  isFetching: false,
  token: null,
};

const reducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.AUTH_SUCCESS: {
      return { ...state, token: action.payload };
    }
    case UserActionTypes.AUTH_FAILURE: {
      return { ...state, token: null, error: action.payload };
    }
    case UserActionTypes.USER_REQUEST: {
      return { ...state, isFetching: true };
    }
    case UserActionTypes.USER_SUCCESS: {
      return { ...state, isFetching: false, user: action.payload };
    }
    case UserActionTypes.USER_FAILURE: {
      return { user: {}, isFetching: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as userReducer };
