import { Loading } from '@enouvo/react-uikit';
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import routes from '~react-pages';

function App() {
  return <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>;
}

export default App;
