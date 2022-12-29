import { createSlice, nanoid } from '@reduxjs/toolkit';
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
    addIngredient: {
      reducer: (state, action) => {
        state.fillings.push(action.payload);
      },
      prepare: ingredient => {
        const uid = nanoid();
        return { payload: { uid, ...ingredient } };
      },
    },
    addBun(state, action) {
      state.bun = action.payload;
    },
    clearOrder(state) {
      state.fillings = [];
      state.bun = null;
    },
  },
});

export const { deleteIngredient, addIngredient, addBun, moveCard, clearOrder } =
  constructorSlice.actions;
export default constructorSlice.reducer;
