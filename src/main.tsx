import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { ThemeContextProvider } from './context';
import { SideMenuContextProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SideMenuContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </SideMenuContextProvider>
  </React.StrictMode>,
);
