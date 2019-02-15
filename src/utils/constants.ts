import { iconGithub, iconLinkedin, iconTwitter } from '@assets/index';

export const API_URL = 'https://rafaelmelon-api.herokuapp.com';

export const VIEWPORT = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

export const ROUTES = {
  home: '/',
  contact: '/contact',
  not_found: '/not',
};

export const SOCIAL = [
  {
    name: 'GitHub',
    url: 'https://github.com/rafaelmelon',
    urlImage: iconGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rafaelmelon/',
    urlImage: iconLinkedin,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/zitronensaure',
    urlImage: iconTwitter,
  },
];
