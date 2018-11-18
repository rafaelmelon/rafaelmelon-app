// Response object for GET /users/rafaelmelon/repos
// https://api.github.com/users/rafaelmelon/repos
export interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: false;
  owner: object;
  html_url: string;
  description: string;
  fork: false;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: string;
  archived: boolean;
  open_issues_count: number;
  license: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export const enum RepositoriesActionTypes {
  REPOSITORIES_ALL_REQUEST = '@@repositories/ALL_REQUEST',
  REPOSITORIES_ALL_SUCCESS = '@@repositories/ALL_SUCCESS',
  REPOSITORIES_ALL_FAILURE = '@@repositories/ALL_FAILURE',
}

export interface RepositoriesState {
  readonly all: Repository[];
  readonly isFetching: boolean;
  readonly error: any;
}
