import { useEffect, useState } from "react";

type Theme = 'dark' | 'light';
const THEME_LOCALSTORAGE_KEY = 'theme';

export function useDarkModeState() {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme || 'light');

  function toggle() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, theme);
  }, [theme]);

  return { isEnabled: theme === 'dark', toggle };
}
