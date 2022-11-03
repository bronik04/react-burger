import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import update from 'immutability-helper';

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
        item => item.uid !== action.payload.uid,
      );
    },
    moveCard(state, action) {
      const dragIndex = action.payload.dragIndex;
      const hoverIndex = action.payload.hoverIndex;
      const array = [...state.fillings];
      const draggingItem = array[dragIndex];
      state.fillings = update(array, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggingItem],
        ],
      });
    },
    addIngredient(state, action) {
      const ingredient = action.payload;
      if (ingredient.type === 'bun') {
        state.bun = action.payload;
      } else {
        state.fillings.push({ ...ingredient, uid: uuidv4() });
      }
    },
    clearOrder (state) {
      state.fillings = [];
      state.bun = null;
    }
  },
});

export const { deleteIngredient, addIngredient, moveCard, clearOrder } =
  constructorSlice.actions;
export default constructorSlice.reducer;
