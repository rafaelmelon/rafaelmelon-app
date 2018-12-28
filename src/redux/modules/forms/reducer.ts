import { Reducer } from 'redux';
import { FormsState, FormsActionTypes } from './types';

const initialState: FormsState = {
  success: '',
  error: null,
  sending: false,
};

const reducer: Reducer<FormsState> = (state = initialState, action) => {
  switch (action.type) {
    case FormsActionTypes.FORM_REQUEST: {
      return { ...state, sending: true };
    }
    case FormsActionTypes.FORM_RESET: {
      return { success: '', error: null, sending: false };
    }
    case FormsActionTypes.FORM_SUCCESS: {
      return { success: action.payload, error: null, sending: false };
    }
    case FormsActionTypes.FORM_FAILURE: {
      return { success: '', error: action.payload, sending: false };
    }
    default: {
      return state;
    }
  }
};

export { reducer as formsReducer };
