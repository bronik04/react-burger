export const socketMiddleware = (wsActions) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
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

        socket.onerror = () => {
          dispatch(connectionError());
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch(getMessage(parsedData));
        };

        if (type === connectionClosed.type) {
          socket.close(1000, 'closed normal');
        }

        socket.onclose = () => {
          dispatch(connectionClosed());
        };
      }

      next(action);
    };
  };
};
