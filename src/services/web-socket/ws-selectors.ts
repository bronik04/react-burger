import {RootState} from "../store";

export const selectOrders = (state: RootState) => state.webSocket.orders;
export const selectWebSocket = (state: RootState) => state.webSocket;
