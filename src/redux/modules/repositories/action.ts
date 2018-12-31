import { action } from 'typesafe-actions';

import { RM_API, request } from '@utils/index';
import { RepositoriesActionTypes, Repository } from './types';

export const fetchAllRepositoriesRequest = () =>
  action(RepositoriesActionTypes.REPOSITORIES_ALL_REQUEST);
export const fetchAllRepositoriesSuccess = (payload: Repository[]) =>
  action(RepositoriesActionTypes.REPOSITORIES_ALL_SUCCESS, payload);
export const fetchAllRepositoriesFailure = (error: string) =>
  action(RepositoriesActionTypes.REPOSITORIES_ALL_FAILURE, error);

export const fetchAllRepositories = () => dispatch => {
  dispatch(fetchAllRepositoriesRequest());
  request(`${RM_API}/users/rafaelmelon/repos`)
    .then(json => dispatch(fetchAllRepositoriesSuccess(json)))
    .catch(error => dispatch(fetchAllRepositoriesFailure(error)));
};
