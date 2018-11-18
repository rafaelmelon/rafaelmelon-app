import { action } from 'typesafe-actions';
import { RepositoriesActionTypes, Repository } from './types';
import { apiGitHub, request } from '@util/api';

export const fetchAllRepositoriesRequest = () =>
  action(RepositoriesActionTypes.REPOSITORIES_ALL_REQUEST);
export const fetchAllRepositoriesSuccess = (payload: Repository[]) =>
  action(RepositoriesActionTypes.REPOSITORIES_ALL_SUCCESS, payload);
export const fetchAllRepositoriesFailure = (error: string) =>
  action(RepositoriesActionTypes.REPOSITORIES_ALL_FAILURE, error);

export const fetchAllRepositories = () => dispatch => {
  dispatch(fetchAllRepositoriesRequest());
  request(`${apiGitHub}/users/rafaelmelon/repos`)
    .then(json => dispatch(fetchAllRepositoriesSuccess(json)))
    .catch(error => dispatch(fetchAllRepositoriesFailure(error)));
};