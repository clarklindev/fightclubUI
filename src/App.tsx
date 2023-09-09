import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

//context
import ThemeContext from './context/ThemeContext';

//styling
import './App.css';

//theming
import { lightTheme } from './themes/LightTheme';
import { darkTheme } from './themes/DarkTheme';

const App = () => {
  const { state } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={state.darkMode ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
