import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sendOrder } from '../../utils/burger-api';

const orderInitialState = {
  number: null,
  orderRequest: false,
  orderFailed: false,
};

export const getOrderNumber = createAsyncThunk(
  'order/getOrderNumber',
  sendOrder,
);

const orderSlice = createSlice({
  name: 'order',
  initialState: orderInitialState,
  reducers: {},
  extraReducers: {
    [getOrderNumber.pending]: state => {
      state.orderRequest = true;
    },
    [getOrderNumber.fulfilled]: (state, action) => {
      state.orderRequest = false;
      state.orderFailed = false;
      state.number = action.payload.order.number;
    },
    [getOrderNumber.rejected]: state => {
      state.orderFailed = true;
    },
  },
});

export default orderSlice.reducer;
