import React, { useEffect } from 'react';

import { useState, createContext, useContext } from 'react';
import { lightTheme } from '@swagfinger/themes/LightTheme';
import { darkTheme } from '@swagfinger/themes/DarkTheme';

enum THEMEMODE {
  dark = 'dark',
  light = 'light',
  system = 'system',
}

const ThemeContext = createContext<{
  colorMode: string | null; //system/dark/light
  checkIsDark: (mode: string) => boolean;
  setColorMode: (mode: string) => void;
  theme: typeof darkTheme | typeof lightTheme | undefined;
}>({
  colorMode: null,
  checkIsDark: _ => false,
  setColorMode: _ => {},
  theme: undefined,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

const checkIsDark = (colorMode: string): boolean => {
  let isDark; //stores a boolean - true is darkmode - false is lightmode
  switch (colorMode) {
    case THEMEMODE.system:
      isDark = window.matchMedia(`(prefers-color-scheme: dark`).matches; //prefers-color-scheme relies on color-scheme being set parent
      break;
    case THEMEMODE.dark:
      isDark = true;
      break;
    case THEMEMODE.light:
      isDark = false;
      break;
    default:
      const error = new Error("Error: you need to set a valid option: 'system', 'dark', 'light'");
      throw error;
  }
  return isDark;
};

//stores in localstorage
const toggleColorScheme = (colorScheme: string) => {
  const html = document.querySelector('html');
  if (html) {
    html.setAttribute('color-scheme', colorScheme);
    document.documentElement.style.setProperty('color-scheme', colorScheme);
  }
};

//NOTE: Todo: if no theme is in localstorage, default should be system. the icon on colorMode should default to system.
export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const defaultColorMode = THEMEMODE.system;
  const [colorMode, setInternalColorMode] = useState(window.localStorage.getItem('colorMode') || defaultColorMode); //system, dark, light
  const [theme, setTheme] = useState<typeof lightTheme | typeof darkTheme>();

  //used internally
  const storeMode = (mode: string) => {
    window.localStorage.setItem('colorMode', mode); //stores 'system', 'dark', 'light'
  };

  const setColorMode = (mode: string) => {
    setInternalColorMode(mode);
    //also store in localstorage
    storeMode(mode);
  };

  useEffect(() => {
    //sets <html color-scheme=""></html> as 'dark' or 'light'
    checkIsDark(colorMode) ? toggleColorScheme(THEMEMODE.dark) : toggleColorScheme(THEMEMODE.light);

    //theme - sets theme as darkTheme or lightTheme
    setTheme(checkIsDark(colorMode) ? darkTheme : lightTheme);
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={{ theme, colorMode, setColorMode, checkIsDark }}>{children}</ThemeContext.Provider>
  );
};
