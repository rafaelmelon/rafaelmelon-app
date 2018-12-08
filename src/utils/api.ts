export const apiGitHub = 'https://api.github.com';
export const API_KEY = process.env.API_KEY;

export const request = (path, options = {}) => {
  const settings = {
    headers: {
      authorization: API_KEY || '',
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
