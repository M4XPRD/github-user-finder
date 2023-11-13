import styles from './Header.module.scss';

interface HeaderProps { }

export const Header = ({ }: HeaderProps) => (
  <div className={styles.Header} data-testid="Header">
    Header Component
  </div>
);
