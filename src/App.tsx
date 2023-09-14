import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  useTheme,
  ThemeContextProvider,
} from 'swagfingerui/context/ThemeContext';
import { lightTheme } from 'swagfingerui/themes/LightTheme';
import { darkTheme } from 'swagfingerui/themes/DarkTheme';

import { router } from './router';
import './App.css';

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContextProvider>
  );
};

export default App;
