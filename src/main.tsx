import React from 'react';
import ReactDOM from 'react-dom/client';

import './main.css';
import App from '@swagfinger/App';
import { ThemeContextProvider } from '@swagfinger/context/ThemeContext';
import { MenuContextProvider } from '@swagfinger/context/MenuContext';
import { ScrollContextProvider } from '@swagfinger/context/ScrollContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <MenuContextProvider>
        <ScrollContextProvider>
          <App />
        </ScrollContextProvider>
      </MenuContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
