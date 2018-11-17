import {
  REPOSITORIES_ALL_REQUEST,
  REPOSITORIES_ALL_SUCCESS,
  REPOSITORIES_ALL_FAILURE
} from './reducer';
import { apiGitHub, request } from '@util/api';

const fetchAllRepositoriesRequest = () => ({
  type: REPOSITORIES_ALL_REQUEST,
});

const fetchAllRepositoriesSuccess = payload => ({
  payload,
  type: REPOSITORIES_ALL_SUCCESS,
});

const fetchAllRepositoriesFailure = error => ({
  error,
  type: REPOSITORIES_ALL_FAILURE,
});

export const fetchAllRepositories = () => dispatch => {
  dispatch(fetchAllRepositoriesRequest());
  request(`${apiGitHub}/users/rafaelmelon/repos`)
    .then(json => dispatch(fetchAllRepositoriesSuccess(json)))
    .catch(error => dispatch(fetchAllRepositoriesFailure(error)));
};
