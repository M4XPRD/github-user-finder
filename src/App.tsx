import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import Search from 'components/Search/Search';
import UserCard from 'components/UserCard/UserCard';
import { useState } from 'react';
import { GithubError, GithubUser, LocalGithubUser } from 'types';
import isGitHubUser from 'utils/typeguards';
import extractLocalUser from 'utils/extract-local-user';
import defaultUser from './mock/index';

const BASE_URL = 'https://api.github.com/users/';

const App = () => {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const response = await fetch(url);
    const userData = await response.json() as GithubUser | GithubError;

    if (isGitHubUser(userData)) {
      setUser(extractLocalUser(userData));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && (
        <UserCard
          {...user}
        />
      )}
    </Container>
  );
};

export default App;
