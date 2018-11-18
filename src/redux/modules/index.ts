import { combineReducers, Dispatch, Action, AnyAction } from 'redux';
import { RepositoriesState, repositoriesReducer } from './repositories';
import { UserState, userReducer } from './user';

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}
export interface ApplicationState {
  repositories: RepositoriesState;
  user: UserState;
}

export const rootReducer = combineReducers<ApplicationState>({
  repositories: repositoriesReducer,
  user: userReducer,
});
