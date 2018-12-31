import { action } from 'typesafe-actions';

import { request, requestJSON, RM_API } from '@utils/index';
import { User, UserActionTypes } from './types';

export const fetchAuthSuccess = (payload: any) =>
  action(UserActionTypes.AUTH_SUCCESS, payload);
export const fetchAuthFailure = (error: string) =>
  action(UserActionTypes.AUTH_FAILURE, error);

export const fetchAuth = () => dispatch => {
  requestJSON(`${RM_API}/login`)
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
  request(`${RM_API}/users`)
    .then(json => dispatch(fetchUserSuccess(json)))
    .catch(error => dispatch(fetchUserFailure(error)));
};
