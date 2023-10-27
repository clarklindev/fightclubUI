import React, { useEffect } from 'react';

import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext<{
  colorMode: string | null;
  isDarkMode: boolean | null;
  setLightDarkSystemMode: (mode: string) => void;
}>({
  colorMode: null,
  isDarkMode: null,
  setLightDarkSystemMode: _ => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

const checkIsDark = (colorMode: string | null): boolean => {
  let isDark; //stores a boolean - true is darkmode - false is lightmode
  switch (colorMode) {
    case 'system':
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      break;
    case 'dark':
      isDark = true;
      break;
    case 'light':
      isDark = false;
      break;
    default:
      const error = new Error("Error: you need to set a valid option: 'system', 'dark', 'light'");
      throw error;
  }
  return isDark;
};

//NOTE: Todo: if no theme is in localstorage, default should be system. the icon on colorMode should default to system.
export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const defaultMode = 'system';

  const [colorMode, setColorMode] = useState(window.localStorage.getItem('colorMode') || defaultMode); //system, dark, light
  const [isDarkMode, setIsDarkMode] = useState(checkIsDark(colorMode) || checkIsDark(defaultMode));

  useEffect(() => {
    isDarkMode ? toggleColorScheme('dark') : toggleColorScheme('light');
  }, [isDarkMode]);

  const toggleColorScheme = (colorScheme: string) => {
    const html = document.querySelector('html');
    if (html) {
      html.setAttribute('color-scheme', colorScheme);
      document.documentElement.style.setProperty('color-scheme', colorScheme);
    }
  };

  const setLightDarkSystemMode = (mode: string) => {
    window.localStorage.setItem('colorMode', mode); //stores 'system', 'dark', 'light'
    setColorMode(mode);
    setIsDarkMode(checkIsDark(mode));
  };

  return (
    <ThemeContext.Provider value={{ colorMode, isDarkMode, setLightDarkSystemMode }}>{children}</ThemeContext.Provider>
  );
};
