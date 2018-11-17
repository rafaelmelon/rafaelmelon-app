export const REPOSITORIES_ALL_REQUEST = 'REPOSITORIES/ALL_REQUEST';
export const REPOSITORIES_ALL_SUCCESS = 'REPOSITORIES/ALL_SUCCESS';
export const REPOSITORIES_ALL_FAILURE = 'REPOSITORIES/ALL_FAILURE';

const initialState = {
  all: [],
  isFetching: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REPOSITORIES_ALL_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case REPOSITORIES_ALL_SUCCESS: {
      return {
        ...state,
        all: action.payload,
        isFetching: false
      };
    }
    case REPOSITORIES_ALL_FAILURE: {
      return {
        ...state,
        all: [],
        isFetching: false
      };
    }
    default:
      return state;
  }
};
