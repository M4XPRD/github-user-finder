import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false);
  const themeText = isDark ? 'Light' : 'Dark';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button className={styles.switcher} type="button" onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </button>
  );
};
export default ThemeSwitcher;
