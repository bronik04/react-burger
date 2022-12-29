import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import {
  IIngredient,
  IIngredientResponse,
  TStatus,
} from '../../types';
import { request } from '../../utils/api-utils';
import { NORMA_API_URL } from '../../utils/consts';

type TIngredientsSlice = {
  ingredients: IIngredient[];
  status: TStatus;
  error: string | null;
};

const initialState: TIngredientsSlice = {
  ingredients: [],
  status: 'idle',
  error: null,
};

export const fetchIngredients = createAsyncThunk<
  IIngredientResponse,
  undefined,
  {
    state: { ingredients: TIngredientsSlice };
    rejectValue: string;
  }
>(
  '@@ingredients/fetchIngredients',
  async (_, { rejectWithValue }) => {
    try {
      return request(`${NORMA_API_URL}/ingredients`);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
);

const ingredientsSlice = createSlice({
  name: '@@ingredients',
  initialState,
  reducers: {
    closeErrModal(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Cannot load data';
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.status = 'success';
        state.ingredients = action.payload.data;
      });
  },
});

export const { closeErrModal } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
