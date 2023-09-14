import { useState, createContext, useContext } from 'react';

// Define an interface for the theme context
const ThemeContext = createContext({
  isDarkMode: false,

  // eslint-disable-next-line
  setIsDarkMode: (_: boolean) => {},
});

// Create a custom hook to simplify accessing the context values
//usage: import { useTheme } from '../../context/ThemeContext';  const { isDarkMode, setIsDarkMode } = useTheme();
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Define the props for your ThemeProvider component
export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isSystemDark = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  const [isDarkMode, setIsDarkMode] = useState(isSystemDark);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
