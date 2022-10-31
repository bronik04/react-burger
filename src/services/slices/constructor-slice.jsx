import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

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
    addIngredient(state, action) {
      const ingredient = action.payload;
      if (ingredient.type === 'bun') {
        state.bun = action.payload
      } else {
        state.fillings.push({...ingredient, uid: uuidv4()})
      }
    },
    increaseCount (state, action) {
      console.log('Увеличить счетчик');
      state.fillings.map(item =>
        item._id === action._id ? {...item, __v: ++item.__v} : item
      )
    }
  },
});

export const { deleteIngredient, addIngredient, increaseCount } = constructorSlice.actions;
export default constructorSlice.reducer;
