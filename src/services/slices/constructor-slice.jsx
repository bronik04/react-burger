import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fillings: [],
  bun: null,
};

const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    deleteIngredient(state, action) {
      state.fillings = state.fillings.filter(
        item => item._id !== action.payload._id,
      );
    },
    addIngredient(state, action) {
      if (action.payload.type === 'bun') {
        state.bun = action.payload
      } else {
        state.fillings.push(action.payload);
      }
    },
  },
});

export const { deleteIngredient, addIngredient } = constructorSlice.actions;
export default constructorSlice.reducer;
