import {RootState} from "../store";

export const getIngredientsState = (state: RootState) => state.ingredients;
export const getIngredients = (state: RootState) => state.ingredients.ingredients;
export const getIngredientsStatus = (state: RootState) => state.ingredients.status;
export const getIngredientsError = (state: RootState) => state.ingredients.error;