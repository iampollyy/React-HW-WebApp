import { useEffect, useState } from "react";
import styles from "./darkMode.module.scss";

type ThemeMode = 'dark' | 'light';

const DarkMode = () => {
  const [theme, setTheme] = useState<ThemeMode | undefined>();

  const applyTheme = (themeMode: ThemeMode) => {
    document.body.setAttribute('data-theme', themeMode);
    setTheme(themeMode);
  };

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeMode | null;
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');

    const setInitialTheme = () => {
      const initialTheme = storedTheme ?? (systemPreference.matches ? 'dark' : 'light');
      applyTheme(initialTheme);
    };

    setInitialTheme();

    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };

    systemPreference.addEventListener('change', handler);
    return () => systemPreference.removeEventListener('change', handler);
  }, []);

  if (theme === undefined) {
    return null;
  }

  return (
    <div className={styles.dark_mode}>
      <input
        className={styles.dark_mode_input}
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <label className={styles.dark_mode_label} htmlFor='darkmode-toggle'></label>
    </div>
  );
};

export default DarkMode;