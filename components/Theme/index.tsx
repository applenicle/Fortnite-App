import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setTheme } from '@/redux/slices/Themes';
import styles from './Theme.module.scss';

const Theme = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.themeSlice);

  React.useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme-color', theme);
  }, [theme]);

  return (
    <>
      <div className={theme == 'dark' ? `${styles.mode} ${styles.modeActive}` : styles.mode}>
        <div onClick={() => dispatch(setTheme('light'))} className={styles.theme}>
          <FontAwesomeIcon icon={faSun} />
          <span>Light</span>
        </div>
        <div onClick={() => dispatch(setTheme('dark'))} className={styles.theme}>
          <FontAwesomeIcon icon={faMoon} />
          <span>Dark</span>
        </div>
      </div>
    </>
  );
};

export default Theme;
