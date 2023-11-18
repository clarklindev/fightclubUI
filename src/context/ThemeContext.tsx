import React, { useEffect } from 'react';

import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext<{
  colorMode: string | null; //system/dark/light
  checkIsDark: (mode: string) => boolean;
  setColorMode: (mode: string) => void;
}>({
  colorMode: null,
  checkIsDark: _ => false,
  setColorMode: _ => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

const checkIsDark = (colorMode: string): boolean => {
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
export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const defaultMode = 'system';

  const [colorMode, setInternalColorMode] = useState(window.localStorage.getItem('colorMode') || defaultMode); //system, dark, light

  const setColorMode = (mode: string) => {
    setInternalColorMode(mode);
    //also store in localstorage
    storeMode(mode);
  };

  useEffect(() => {
    checkIsDark(colorMode) ? toggleColorScheme('dark') : toggleColorScheme('light');
  }, [colorMode]);

  //stores in localstorage
  const toggleColorScheme = (colorScheme: string) => {
    const html = document.querySelector('html');
    if (html) {
      html.setAttribute('color-scheme', colorScheme);
      document.documentElement.style.setProperty('color-scheme', colorScheme);
    }
  };

  const storeMode = (mode: string) => {
    window.localStorage.setItem('colorMode', mode); //stores 'system', 'dark', 'light'
  };

  return <ThemeContext.Provider value={{ colorMode, setColorMode, checkIsDark }}>{children}</ThemeContext.Provider>;
};
