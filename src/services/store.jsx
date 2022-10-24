import {configureStore} from "@reduxjs/toolkit";
import ingredientReducer from '../services/slices/ingredient-slice';
import orderReducer from "./slices/order-slice";

export default configureStore({
  reducer: {
    ingredientReducer,
    orderReducer,
  }
})