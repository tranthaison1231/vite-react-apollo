import { loadable } from '@enouvo/react-uikit';
import { useRoutes } from 'react-router-dom';
import GuardRoute from './GuardRoute';

const Login = loadable(import('../pages/login'));
const ForgotPassword = loadable(import('../pages/forgot-password'));
const ResetPassword = loadable(import('../pages/reset-password'));

const App = () => {
  const routes = useRoutes([
    {
      element: (
        <GuardRoute>
          <Login />
        </GuardRoute>
      ),
      path: 'login',
    },
    {
      element: (
        <GuardRoute>
          <ForgotPassword />
        </GuardRoute>
      ),
      path: '/forgot-password',
    },
    {
      element: (
        <GuardRoute>
          <ResetPassword />
        </GuardRoute>
      ),
      path: '/reset-password',
    },
    {
      element: (
        <GuardRoute isPrivate>
          <div>Private Route</div>
        </GuardRoute>
      ),
      path: '/*',
    },
  ]);

  return routes;
};

export default App;
