import { github, linkedin, twitter } from '@assets/index';

const ENV = process.env.NODE_ENV === 'production';
export const RM_API = ENV ? process.env.RM_API : process.env.RM_API_DEV;
export const API_GITHUB = process.env.API_GITHUB;
export const TOKEN_GITHUB = process.env.TOKEN_GITHUB;

console.log(RM_API, ENV);

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
