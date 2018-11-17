import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from './reducer';
import { apiGitHub, request } from '@util/api';

const fetchUserRequest = () => ({
  type: USER_REQUEST
});

const fetchUserSuccess = payload => ({
  payload,
  type: USER_SUCCESS
});

const fetchUserFailure = error => ({
  error,
  type: USER_FAILURE
});

export const fetchUser = () => dispatch => {
  dispatch(fetchUserRequest());
  request(`${apiGitHub}/users/rafaelmelon`)
    .then(json => dispatch(fetchUserSuccess(json)))
    .catch(error => dispatch(fetchUserFailure(error)));
};
