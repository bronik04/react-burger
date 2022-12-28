import { configureStore } from '@reduxjs/toolkit';
import ingredientReducer from './features/ingredients/ingredients-slice';
import orderReducer from './features/order/order-slice';
import constructorReducer from './features/constructor/constructor-slice';
import currentIngredientReducer from './features/ingredients/ingredient-slice';
import authReducer from './features/auth/auth';
import wsSlice, {wsActions} from "./features/web-socket/ws-slice";
import * as api from '../utils/burger-api';
import { socketMiddleware } from './features/web-socket/socket-middleware';
import {useDispatch} from "react-redux";

export const store = configureStore({
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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
