import { RootState } from '../store';

export const selectIngredientsState = (state: RootState) => state.ingredients;

export const selectIngredients = (state: RootState) =>
  state.ingredients.ingredients;

export const selectIngredientsStatus = (state: RootState) =>
  state.ingredients.status;

export const selectIngredientsError = (state: RootState) =>
  state.ingredients.error;

export const selectIngredientById = (id: string) => (state: RootState) =>
  state.ingredients.ingredients.find((ingredient) => ingredient._id === id);
