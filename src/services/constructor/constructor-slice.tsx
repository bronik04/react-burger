import {createSlice, nanoid, PayloadAction} from '@reduxjs/toolkit';
import update from 'immutability-helper';
import { IIngredient } from '../../types';

export type TConstructorSlice = {
  fillings: IIngredient[];
  bun: IIngredient | null;
};

export type TMoveIndex = {
    dragIndex: number,
    hoverIndex: number,
}

const initialState: TConstructorSlice = {
  fillings: [],
  bun: null,
};


const constructorSlice = createSlice({
  name: '@@constructor',
  initialState,
  reducers: {
    deleteIngredient(state, action: PayloadAction<IIngredient>) {
      state.fillings = state.fillings.filter(
        (item) => item.uid !== action.payload.uid,
      );
    },
    moveCard(state, action: PayloadAction<TMoveIndex>) {
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
      reducer: (state, action:PayloadAction<IIngredient>) => {
        state.fillings.push(action.payload);
      },
      prepare: (ingredient: IIngredient) => {
        const uid = nanoid();
        return { payload: { uid, ...ingredient } };
      },
    },
    addBun(state, action: PayloadAction<IIngredient>) {
      state.bun = action.payload;
    },
    clearOrder(state) {
      state.fillings = [];
      state.bun = null;
    },
  },
});

export const { deleteIngredient, addBun, moveCard, clearOrder, addIngredient } =
  constructorSlice.actions;
export default constructorSlice.reducer;
