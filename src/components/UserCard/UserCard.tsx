import { LocalGithubUser } from 'types';
import UserTitle from 'components/UserTitle/UserTitle';
import UserInfo from 'components/UserInfo/UserInfo';
import UserStat from '../UserStat/UserStat';
import styles from './UserCard.module.scss';

interface UserCardProps extends LocalGithubUser {}

const UserCard = (props: UserCardProps) => {
  const {
    repos,
    followers,
    following,
    createdAt,
    login,
    name,
    avatar,
    bio,
    blog,
    company,
    location,
    twitter,
  } = props;

  return (
    <div className={styles.userCard}>
      <img src={avatar} alt={login} className={styles.avatar} />
      <UserTitle createdAt={createdAt} login={login} name={name} />
      <p className={`${styles.bio}${bio ? '' : ` ${styles.empty}`}`}>
        {bio || 'This profile has no bio'}
      </p>
      <UserStat repos={repos} followers={followers} following={following} />
      <UserInfo
        blog={blog}
        company={company}
        location={location}
        twitter={twitter}
      />
    </div>
  );
};

export default UserCard;
