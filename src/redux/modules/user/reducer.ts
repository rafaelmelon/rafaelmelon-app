export const USER_REQUEST = 'USER/REQUEST';
export const USER_SUCCESS = 'USER/SUCCESS';
export const USER_FAILURE = 'USER/FAILURE';

const initialState = {
  user: {},
  isFetching: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isFetching: false,
      };
    }
    case USER_FAILURE: {
      return {
        ...state,
        user: {},
        isFetching: false,
      };
    }
    default:
      return state;
  }
};
