import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { useTheme } from '@/hooks/useTheme';

const Theme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className={theme == false ? 'navbar__mode active' : 'navbar__mode'}>
        <div onClick={() => setTheme(true)} className="navbar__theme">
          <FontAwesomeIcon icon={faSun} />
          <span>Light</span>
        </div>
        <div onClick={() => setTheme(false)} className="navbar__theme">
          <FontAwesomeIcon icon={faMoon} />
          <span>Dark</span>
        </div>
      </div>
    </>
  );
};

export default Theme;
