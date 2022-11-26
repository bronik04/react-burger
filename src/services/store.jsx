import { configureStore } from '@reduxjs/toolkit';
import ingredientReducer from './slices/ingredients-slice';
import orderReducer from './slices/order-slice';
import constructorReducer from './slices/constructor-slice';
import currentIngredientReducer from './slices/ingredient-slice';
import authReducer from './slices/auth';
import * as api from '../utils/burger-api';

export default configureStore({
  reducer: {
    ingredientReducer,
    constructorReducer,
    orderReducer,
    currentIngredientReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  })
});
