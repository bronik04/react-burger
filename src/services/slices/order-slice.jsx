import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sendOrder } from '../../utils/burger-api';

const orderInitialState = {
  number: null,
  errorMessage: null,
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
  reducers: {
    clearErrorMessage(state) {
      state.errorMessage = null;
    },
  },
  extraReducers: {
    [getOrderNumber.pending]: state => {
      state.orderRequest = true;
    },
    [getOrderNumber.fulfilled]: (state, action) => {
      state.orderRequest = false;
      state.orderFailed = false;
      state.number = action.payload.order.number;
    },
    [getOrderNumber.rejected]: (state, action) => {
      state.orderFailed = true;
      state.errorMessage = action.error.message;
    },
  },
});

export const { clearErrorMessage } = orderSlice.actions;

export default orderSlice.reducer;
