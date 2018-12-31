import { Action, AnyAction, combineReducers, Dispatch } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { formsReducer, FormsState } from './forms';
import { repositoriesReducer, RepositoriesState } from './repositories';
import { userReducer, UserState } from './user';

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}
export interface AppState {
  repositories: RepositoriesState;
  user: UserState;
  form: any;
  forms: FormsState;
}

export const rootReducer = combineReducers<AppState>({
  repositories: repositoriesReducer,
  user: userReducer,
  form: formReducer,
  forms: formsReducer,
});
