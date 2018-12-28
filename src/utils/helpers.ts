import { TOKEN_GITHUB } from './constants';

export const setToken = token => {
  return window.localStorage.setItem('token', token);
};

export const getToken = () => {
  return window.localStorage.getItem('token');
};

export const request = (url, options = {}) => {
  const settings = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + TOKEN_GITHUB,
    },
    ...options,
  };

  return fetch(url, settings).then(response => {
    return response.json();
  });
};

export const requestJSON = (url, options = {}) => {
  const settings = {
    headers: {},
    ...options,
  };

  return fetch(url, settings).then(response => {
    return response.json();
  });
};
