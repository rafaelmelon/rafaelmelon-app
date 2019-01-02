import { Reducer } from 'redux';
import { UserActionTypes, UserState } from './types';

const initialState: UserState = {
  isAuth: false,
  user: {},
  error: undefined,
  isFetching: false,
  isPageLoaded: false,
};

const reducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.PAGE_LOADED: {
      return { ...state, isPageLoaded: true };
    }
    case UserActionTypes.AUTH_SUCCESS: {
      return { ...state, isAuth: true };
    }
    case UserActionTypes.AUTH_FAILURE: {
      return { ...state, isAuth: false, error: action.payload };
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
