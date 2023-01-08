import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { wsActions } from '../services/web-socket/ws-slice';
import { wsUrl } from '../utils/consts';
import { getCookie } from '../utils/cookie';
import {useAppDispatch} from "../services/store";

export function useSocket() {
  const location = useLocation();
  const dispatch = useAppDispatch();
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
