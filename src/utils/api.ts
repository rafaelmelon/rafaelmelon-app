export const API = 'https://api.github.com';
export const TOKEN = '5e7e0f4fc48778661389dfcbf0d59b4121401246';

export const request = (path, options = {}) => {
  const settings = {
    headers: {
      authorization: TOKEN,
    },
    ...options,
  };
  return fetch(path, settings).then(response => {
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
