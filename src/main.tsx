import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { ThemeContextProvider } from './context/ThemeContext';
import { MenuContextProvider } from './context/MenuContext';
import { OnThisPageContextProvider } from './context/OnThisPageContext';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ThemeContextProvider>
    <MenuContextProvider>
      <OnThisPageContextProvider>
        <App />
      </OnThisPageContextProvider>
    </MenuContextProvider>
  </ThemeContextProvider>,
  // </React.StrictMode>,
);
