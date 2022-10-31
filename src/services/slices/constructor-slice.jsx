import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fillings: [],
  bun: {
    _id: '60d3b41abdacab0026a733c6',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    __v: 0,
  },
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
