import React from 'react';
import ReactDOM from 'react-dom/client';

import './main.css';
import './mdx.css';

import App from '@fightclub/App';
import { ThemeContextProvider } from '@fightclub/context/ThemeContext';
import { MenuContextProvider } from '@fightclub/context/MenuContext';
import { ScrollContextProvider } from '@fightclub/context/ScrollContext';

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
