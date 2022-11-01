import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { NORMA_API_URL } from '../../utils/consts';
import { checkResponse, sendOrder } from '../../utils/burger-api';

const orderInitialState = {
  number: null,
  orderRequest: false,
  orderFailed: false,
};

export const getOrderNumber = createAsyncThunk(
  'number/getOrderNumber',
  async () => {
    const res = await fetch(`${NORMA_API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({  }),
    });
  },
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
      state.number = action.payload.number;
    },
    [getOrderNumber.rejected]: state => {
      state.orderFailed = true;
    },
  },
});

export default orderSlice.reducer;

export const { getNumberSuccess } = orderSlice.actions;
