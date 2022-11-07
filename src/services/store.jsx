import {configureStore} from "@reduxjs/toolkit";
import ingredientReducer from './slices/ingredients-slice';
import orderReducer from "./slices/order-slice";
import constructorReducer from "./slices/constructor-slice";
import currentIngredientReducer from "./slices/ingredient-slice"

export default configureStore({
  reducer: {
    ingredientReducer,
    constructorReducer,
    orderReducer,
    currentIngredientReducer,
  }
})