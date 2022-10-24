import {createSlice} from "@reduxjs/toolkit";

const orderInitialState = {
  number: null,
  orderRequest: false,
  orderFailed: false,
}

const orderSlice = createSlice({
  name: 'order',
  initialState: orderInitialState,
  reducers: {
    getNumberRequest (state)  {
      state.orderRequest = true;
    },
    getNumberSuccess (state, action) {
      state.orderRequest = false;
      state.orderFailed = false;
      state.number = action.payload.number;
    },
    getNumberFailed (state) {
      state.orderFailed = true;
    }
  }
});

export default orderSlice.reducer;

export  const {getNumberRequest, getNumberSuccess, getNumberFailed} = orderSlice.actions;