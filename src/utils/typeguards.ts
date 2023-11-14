import { GithubUser } from 'types';

const isGitHubUser = (user: any): user is GithubUser => 'id' in user;

export default isGitHubUser;
