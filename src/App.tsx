import { Loading } from '@enouvo/react-uikit';
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';

function App() {
  return <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>;
}

export default App;
