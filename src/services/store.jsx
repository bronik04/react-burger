import {configureStore} from "@reduxjs/toolkit";
import ingredientReducer from '../services/slices/ingredient-slice';
import orderReducer from "./slices/order-slice";
import constructorReducer from "./slices/constructor-slice";

export default configureStore({
  reducer: {
    ingredientReducer,
    constructorReducer,
    orderReducer,
  }
})