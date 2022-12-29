import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { wsActions } from '../services/web-socket/ws-slice';
import { wsUrl } from '../utils/consts';
import { getCookie } from '../utils/cookie';

export function useSocket() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { connectionStart, connectionClosed } = wsActions;

  useEffect(() => {
    if (location.pathname.startsWith('/feed')) {
      dispatch(connectionStart(`${wsUrl}/all`));
    } else {
      const accessToken = getCookie('accessToken').replace(
        'Bearer ',
        '',
      );
      dispatch(connectionStart(`${wsUrl}?token=${accessToken}`));
    }

    return () => {
      dispatch(connectionClosed());
    };
  }, [location]);
}
