import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.scss';

const currentTheme = localStorage.getItem('chosenTheme') ?? localStorage.setItem('chosenTheme', 'light');

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(currentTheme);
  const themeText = theme === 'dark' ? 'Light' : 'Dark';
  const ThemeIcon = theme === 'dark' ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
    if (localStorage.getItem('chosenTheme') === 'dark') {
      localStorage.setItem('chosenTheme', 'light');
    } else {
      localStorage.setItem('chosenTheme', 'dark');
    }
  }, [theme]);

  return (
    <button className={styles.switcher} type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </button>
  );
};
export default ThemeSwitcher;
