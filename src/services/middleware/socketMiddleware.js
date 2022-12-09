export const socketMiddleware = (wsActions) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        connectionStart,
        connectionOpened,
        connectionError,
        getMessage,
        connectionClosed,
      } = wsActions;

      if (type === connectionStart.type) {
        socket = new WebSocket(payload);
      }
      if (socket) {
        socket.onopen = () => {
          dispatch(connectionOpened());
        };

        socket.onerror = event => {
          dispatch(connectionError());
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch(getMessage(parsedData));
        };

        socket.onclose = event => {
          dispatch(connectionClosed());
        };
      }

      next(action);
    };
  };
};
