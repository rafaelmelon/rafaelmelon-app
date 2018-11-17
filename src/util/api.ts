export const apiGitHub = 'https://api.github.com';

export const request = (path, options = {}) => {
  const settings = {
    ...options
  };
  return fetch(path, settings).then(response => response.json());
};
