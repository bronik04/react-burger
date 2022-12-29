import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIngredient: null,
};

export const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    selectCurrentIngredient(state, action) {
      state.currentIngredient = action.payload;
    },
    clearCurrentIngredient(state, action) {
      state.currentIngredient = action.payload;
    },
  },
});

export const { selectCurrentIngredient, clearCurrentIngredient } =
  ingredientSlice.actions;
export default ingredientSlice.reducer;
