export const socketMiddleware = (wsUrl, wsActions) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type } = action;
      const {
        connectionStart,
        connectionSuccess,
        connectionError,
        getMessage,
        connectionClosed,
      } = wsActions;

      if (type === connectionStart.type) {
        socket = new WebSocket(wsUrl);
      }
      if (socket) {
        socket.onopen = event => {
          dispatch(dispatch(connectionSuccess()));
        };

        socket.onerror = event => {
          dispatch(connectionError(null));
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch(getMessage(parsedData));
        };

        socket.onclose = event => {
          dispatch(connectionClosed());
        };

        // if (type === 'WS_SEND_MESSAGE') {
        //   const message = payload;
        //   // функция для отправки сообщения на сервер
        //   socket.send(JSON.stringify(message));
        // }
      }

      next(action);
    };
  };
};
