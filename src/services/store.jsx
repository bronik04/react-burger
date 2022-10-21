import {configureStore} from "@reduxjs/toolkit";
import ingredientReducer from '../services/slices/ingredient-slice';

export default configureStore({
  reducer: {
    ingredientReducer,
  }
})