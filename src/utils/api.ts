export const API = process.env.API;
export const API_GITHUB = process.env.API_GITHUB;
export const TOKEN_GITHUB = process.env.TOKEN_GITHUB;

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
    const status403 = response.status === 403;

    if (status403) {
      const error = Object.assign({}, response, {
        status: response.status,
        statusText: response.statusText,
      });

      return Promise.reject(error);
    }
    return response.json();
  });
};
