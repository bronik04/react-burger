import { createSlice } from '@reduxjs/toolkit';
import {getIngredients} from "../../utils/burger-api";

const initialState = {
  ingredients: [],
  request: false,
  failed: false,
}

const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers: {
    [getIngredients.pending]: (state) => {
      state.request = true;
      state.failed = false;
    },
    [getIngredients.fulfilled]: (state, action) => {
      state.request = false;
      state.ingredients = action.payload.data;
    },
    [getIngredients.rejected]: (state, action) => {},
  }

})

//export const {addIngredient} = ingredientSlice.actions;

export default  ingredientSlice.reducer;