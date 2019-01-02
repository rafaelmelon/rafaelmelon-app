import { github, linkedin, twitter } from '@assets/index';

export const API_URL = 'http://localhost:8080';

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
    urlImage: github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rafaelmelon/',
    urlImage: linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/zitronensaure',
    urlImage: twitter,
  },
];
