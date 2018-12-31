import { Reducer } from 'redux';
import { RepositoriesActionTypes, RepositoriesState } from './types';

const initialState: RepositoriesState = {
  all: [],
  error: undefined,
  isFetching: false,
};

const reducer: Reducer<RepositoriesState> = (state = initialState, action) => {
  switch (action.type) {
    case RepositoriesActionTypes.REPOSITORIES_ALL_REQUEST: {
      return { ...state, isFetching: true };
    }
    case RepositoriesActionTypes.REPOSITORIES_ALL_SUCCESS: {
      return { ...state, isFetching: false, all: action.payload };
    }
    case RepositoriesActionTypes.REPOSITORIES_ALL_FAILURE: {
      return { all: [], isFetching: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as repositoriesReducer };
