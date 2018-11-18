import { action } from 'typesafe-actions';
import { UserActionTypes, User } from './types';
import { apiGitHub, request } from '@util/api';

export const fetchUserRequest = () => action(UserActionTypes.USER_REQUEST);
export const fetchUserSuccess = (payload: User) =>
  action(UserActionTypes.USER_SUCCESS, payload);
export const fetchUserFailure = (error: string) =>
  action(UserActionTypes.USER_FAILURE, error);

export const fetchUser = () => dispatch => {
  dispatch(fetchUserRequest());
  request(`${apiGitHub}/users/rafaelmelon`)
    .then(json => dispatch(fetchUserSuccess(json)))
    .catch(error => dispatch(fetchUserFailure(error)));
};
