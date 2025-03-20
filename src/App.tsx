import { RouterProvider } from 'react-router-dom';

import { router } from '@fightclub/router';

import '@fightclub/App.css';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
