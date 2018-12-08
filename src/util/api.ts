export const apiGitHub = 'https://api.github.com';
export const API_KEY = process.env.API_KEY;

export const request = (path, options = {}) => {
  const settings = {
    headers: {
      authorization: API_KEY || '',
    },
    ...options,
  };
  return fetch(path, settings).then(response => response.json());
};
