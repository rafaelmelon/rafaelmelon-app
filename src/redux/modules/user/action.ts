import { action } from 'typesafe-actions';

import { API_URL, request, requestJSON } from '@utils/index';
import { User, UserActionTypes } from './types';

export const pageLoaded = () => action(UserActionTypes.PAGE_LOADED);

export const fetchAuthSuccess = (payload: any) =>
  action(UserActionTypes.AUTH_SUCCESS, payload);
export const fetchAuthFailure = (error: string) =>
  action(UserActionTypes.AUTH_FAILURE, error);

export const fetchAuth = () => dispatch => {
  requestJSON(`${API_URL}/login`)
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
  request(`${API_URL}/user`)
    .then(json => dispatch(fetchUserSuccess(json)))
    .catch(error => dispatch(fetchUserFailure(error)));
};
