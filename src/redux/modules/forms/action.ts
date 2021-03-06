import { action } from 'typesafe-actions';

import { API_URL, request } from '@utils/index';
import { FormsActionTypes } from './types';

export const resetContactForm = () => action(FormsActionTypes.FORM_RESET);

export const sendFormRequest = () => action(FormsActionTypes.FORM_REQUEST);

export const sendFormSuccess = (payload: string) =>
  action(FormsActionTypes.FORM_SUCCESS, payload);
export const sendFormFailure = (error: any) =>
  action(FormsActionTypes.FORM_FAILURE, error);

export const sendContactForm = values => dispatch => {
  const options = {
    method: 'POST',
    body: JSON.stringify(values),
  };

  dispatch(sendFormRequest());
  request(`${API_URL}/contact`, options)
    .then(json => dispatch(sendFormSuccess(json)))
    .catch(error => dispatch(sendFormFailure(error)));
};
