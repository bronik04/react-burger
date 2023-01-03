import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IWebSocketOrder, IWebSocketResponse} from "../../types/web-socket";

export type TWsSlice = {
  wsConnected: boolean;
  orders: IWebSocketOrder[];
  total: number | null;
  totalToday: number | null;
  error: boolean;
};

const initialState: TWsSlice = {
  wsConnected: false,
  orders: [],
  total: null,
  totalToday: null,
  error: false,
};

const wsSlice = createSlice({
  name: '@@WebSocket',
  initialState,
  reducers: {
    connectionStart(state) {
      state.wsConnected = true;
      state.error = false;
    },
    connectionOpened(state) {
      state.wsConnected = true;
    },
    connectionError(state) {
      state.wsConnected = false;
      state.error = true;
    },
    connectionClosed(state) {
      state.wsConnected = false;
    },
    getMessage(state, action: PayloadAction<IWebSocketResponse>) {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    },
  },
});
export const wsActions = wsSlice.actions;
export default wsSlice.reducer;
