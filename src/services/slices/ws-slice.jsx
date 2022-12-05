import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  wsConnected: false,
  feeds: [],
  total: null,
  totalToday: null,
  error: null
}

const wsSlice =createSlice({
  name: 'WS',
  initialState,
  reducers: {
    connectionStart (state)  {
      state.wsConnected = true;
      state.error = null;
    },
    connectionOpened (state)  {
      state.wsConnected = true;
    },
    connectionError (state, action)  {
      state.wsConnected = false;
      state.error = action.payload;
    },
    connectionClosed (state)  {
      state.wsConnected = false;
    },
    getMessage (state, action) {
      state.feeds = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    }
  }
});
export const wsActions = wsSlice.actions;
export default wsSlice.reducer;