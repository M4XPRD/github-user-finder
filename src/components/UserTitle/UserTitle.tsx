import styles from './UserTitle.module.scss';
import { LocalGithubUser } from '../../types/user';

interface UserTitleProps extends Pick<LocalGithubUser, 'name' | 'login' | 'createdAt'> {}

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const UserTitle = ({ name, login, createdAt }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(createdAt));

  // const handleClick = (login: string) => {

  // };

  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <a href="https://github.com/M4XPRD" target="_blank" rel="noreferrer">{login}</a>
      {/* <h3>{login}</h3> */}
      <span>{joinedDate}</span>
    </div>
  );
};

export default UserTitle;
