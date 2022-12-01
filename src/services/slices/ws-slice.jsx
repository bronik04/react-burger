import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  wsConnected: false,
  feeds: [],
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
    connectionSuccess (state)  {
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
    }
  }
});
export const wsActions = wsSlice.actions;
export default wsSlice.reducer;