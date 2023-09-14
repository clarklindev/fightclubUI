import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useTheme } from './context/ThemeContext';
import { lightTheme } from './themes/LightTheme';
import { darkTheme } from './themes/DarkTheme';
import { router } from './router';

import './App.css';

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
