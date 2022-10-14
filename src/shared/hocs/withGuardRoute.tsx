import { Loading } from '@enouvo/react-uikit';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '#/shared/utils/token';

function withGuardRoute<T extends object>(
  WrappedComponent: React.ComponentType<T>,
  isPrivate = false,
) {
  return function (props: T) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      (async () => {
        setLoading(true);
        const accessToken = getToken();
        if (!accessToken && isPrivate) {
          navigate('/login', {
            replace: true,
          });
        }
        if (accessToken && !isPrivate) {
          navigate('/', {
            replace: true,
          });
        }
        setLoading(false);
      })();
    }, [navigate]);

    if (loading) return <Loading />;
    return <WrappedComponent {...(props as T)} />;
  };
}

export default withGuardRoute;
