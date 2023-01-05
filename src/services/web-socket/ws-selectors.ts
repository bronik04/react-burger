import {RootState} from "../store";

export const selectOrders = (state: RootState) => state.webSocket.orders;
export const selectWebSocket = (state: RootState) => state.webSocket;

export const selectFeedById = (id: string) => (state: RootState) =>
    state.webSocket.orders.find((ingredient) => ingredient._id === id);
