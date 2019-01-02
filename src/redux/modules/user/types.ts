// Response object for GET /users/rafaelmelon
// https://api.github.com/users/rafaelmelon
export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export const enum UserActionTypes {
  PAGE_LOADED = '@@user/PAGE_LOADED',
  AUTH_SUCCESS = '@@user/AUTH_SUCCESS',
  AUTH_FAILURE = '@@user/AUTH_FAILURE',
  USER_REQUEST = '@@user/USER_REQUEST',
  USER_SUCCESS = '@@user/USER_SUCCESS',
  USER_FAILURE = '@@user/USER_FAILURE',
}

export interface UserState {
  readonly isAuth?: boolean;
  readonly user: object;
  readonly isFetching: boolean;
  readonly isPageLoaded?: boolean;
  readonly error: any;
}
