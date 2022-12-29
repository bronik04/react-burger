import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IOrderResponse, TStatus} from '../../types';
import { createOptions, request } from '../../utils/api-utils';
import { methods, NORMA_API_URL } from '../../utils/consts';
import { getCookie } from '../../utils/cookie';

type TOrderSlice = {
  number: number | null;
  status: TStatus;
  error: string | null;
};

const initialState: TOrderSlice = {
  number: null,
  status: 'idle',
  error: null,
};

export const fetchOrder = createAsyncThunk<
    IOrderResponse,
    string[],
    {
        state: {order: TOrderSlice},
        rejectValue: string;
    }
    >(
  '@@order/fetchOrder',
  async (ingredients,{rejectWithValue}) => {
    try {
      return request(
        `${NORMA_API_URL}/orders`,
        createOptions(methods.post, { ingredients }, getCookie('accessToken')),
      );
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue('Unknown error');
    }
  },
);

const orderSlice = createSlice({
  name: '@@order',
  initialState,
  reducers: {
    clearErrorMessage(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Cannot send order';
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.status = 'success';
        state.error = null;
        state.number = action.payload.order.number;
      });
  },
});

export const { clearErrorMessage } = orderSlice.actions;

export default orderSlice.reducer;
