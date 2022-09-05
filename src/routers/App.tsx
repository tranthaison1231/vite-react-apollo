import { loadable } from '@base-projects/web-uikit';
import { useRoutes } from 'react-router-dom';
import GuardRoute from './GuardRoute';

const Login = loadable(import('../pages/Login'));
const ForgotPassword = loadable(import('../pages/ForgotPassword'));
const ResetPassword = loadable(import('../pages/ResetPassword'));

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
