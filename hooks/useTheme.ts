import React from 'react';

export const useTheme = () => {
  // const [theme, setTheme] = React.useState(localStorage.getItem('theme-color') || 'dark');
  const [theme, setTheme] = React.useState(!true);
  React.useLayoutEffect(() => {
    if (theme === true) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    // localStorage.setItem('theme-color', theme);
  }, [theme]);
  return { theme, setTheme };
};
