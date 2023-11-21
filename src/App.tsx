import { RouterProvider } from 'react-router-dom';

import { router } from '@swagfinger/router';

import '@swagfinger/App.css';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
