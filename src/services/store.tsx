import { configureStore } from '@reduxjs/toolkit';
import ingredientReducer from './ingredients/ingredients-slice';
import orderReducer from './order/order-slice';
import constructorReducer from './constructor/constructor-slice';
import authReducer from './auth/auth';
import wsSlice, {wsActions} from "./web-socket/ws-slice";
import * as api from '../utils/burger-api';
import { socketMiddleware } from './web-socket/socket-middleware';
import {useDispatch} from "react-redux";

export const store = configureStore({
  reducer: {
    ingredients: ingredientReducer,
    constructorReducer,
    orderReducer,
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
