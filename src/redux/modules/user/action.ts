import { action } from 'typesafe-actions';

import { UserActionTypes, User } from './types';
import { API, request, requestJSON } from '@utils/index';

export const fetchAuthSuccess = (payload: any) =>
  action(UserActionTypes.AUTH_SUCCESS, payload);
export const fetchAuthFailure = (error: string) =>
  action(UserActionTypes.AUTH_FAILURE, error);

export const fetchAuth = () => dispatch => {
  requestJSON(`${API}/login`)
    .then(json => dispatch(fetchAuthSuccess(json)))
    .catch(error => dispatch(fetchAuthFailure(error)));
};

export const fetchUserRequest = () => action(UserActionTypes.USER_REQUEST);
export const fetchUserSuccess = (payload: User) =>
  action(UserActionTypes.USER_SUCCESS, payload);
export const fetchUserFailure = (error: string) =>
  action(UserActionTypes.USER_FAILURE, error);

export const fetchUser = () => dispatch => {
  dispatch(fetchUserRequest());
  request(`${API}/users`)
    .then(json => dispatch(fetchUserSuccess(json)))
    .catch(error => dispatch(fetchUserFailure(error)));
};
