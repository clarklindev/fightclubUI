import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useTheme } from '@swagfinger/context/ThemeContext';
import { lightTheme } from '@swagfinger/themes/LightTheme';
import { darkTheme } from '@swagfinger/themes/DarkTheme';
import { router } from '@swagfinger/router';

import '@swagfinger/App.css';

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    // NOTE: ThemeProvider here is from styled-components
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
