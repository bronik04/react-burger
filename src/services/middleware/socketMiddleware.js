export const socketMiddleware = (wsUrl, wsActions) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        connectionStart,
        connectionSuccess,
        connectionError,
        getMessage,
        connectionClosed,
      } = wsActions;

      if (type === connectionStart?.type) {
        socket = new WebSocket(wsUrl);
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch(dispatch(connectionSuccess()));
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch(connectionError(null));
        };

        // функция, которая вызывается при получении события от сервера
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch(getMessage(parsedData));
        };
        // функция, которая вызывается при закрытии соединения
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
