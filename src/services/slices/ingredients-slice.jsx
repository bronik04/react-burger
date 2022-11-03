import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchIngredients} from '../../utils/burger-api';

const initialState = {
  ingredients: [],
  currentIngredient: null,

  request: false,
  failed: false,
  errorMessage: null,
};

export const getIngredients = createAsyncThunk(
  'ingredients/getIngredients',
  fetchIngredients
);

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    closeErrModal(state) {
      state.errorMessage = null;
    },
    selectCurrentIngredient (state, action) {
      state.currentIngredient = action.payload;
    },
    clearCurrentIngredient (state, action) {
      state.currentIngredient = action.payload;
    }
  },
  extraReducers: {
    [getIngredients.pending]: state => {
      state.request = true;
      state.failed = false;
    },
    [getIngredients.fulfilled]: (state, action) => {
      state.request = false;
      state.ingredients = action.payload.data;
    },
    [getIngredients.rejected]: (state, action) => {
      state.request = false;
      state.failed = true;
      state.errorMessage = action.error.message;
    },
  },
});

export const { closeErrModal, selectCurrentIngredient, clearCurrentIngredient } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
