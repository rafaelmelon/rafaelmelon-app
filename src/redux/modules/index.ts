import { combineReducers, Dispatch, Action, AnyAction } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { FormsState, formsReducer } from './forms';
import { RepositoriesState, repositoriesReducer } from './repositories';
import { UserState, userReducer } from './user';

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
