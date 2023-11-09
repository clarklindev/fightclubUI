import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { ThemeContextProvider } from './context/ThemeContext';
import { MenuContextProvider } from './context/MenuContext';
import { ScrollContextProvider } from './context/ScrollContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ThemeContextProvider>
    <MenuContextProvider>
      <ScrollContextProvider>
        <App />
      </ScrollContextProvider>
    </MenuContextProvider>
  </ThemeContextProvider>,
  // </React.StrictMode>,
);
