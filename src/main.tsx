import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { ThemeContextProvider } from './context/ThemeContext';
import { MenuContextProvider } from './context/MenuContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
