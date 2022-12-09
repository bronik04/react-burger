import { configureStore } from '@reduxjs/toolkit';
import ingredientReducer from './slices/ingredients-slice';
import orderReducer from './slices/order-slice';
import constructorReducer from './slices/constructor-slice';
import currentIngredientReducer from './slices/ingredient-slice';
import authReducer from './slices/auth';
import wsSlice, {wsActions} from "./slices/ws-slice";
import * as api from '../utils/burger-api';
import { socketMiddleware } from './middleware/socketMiddleware';

export default configureStore({
  reducer: {
    ingredientReducer,
    constructorReducer,
    orderReducer,
    currentIngredientReducer,
    auth: authReducer,
    webSocket: wsSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(socketMiddleware(wsActions)),
});
