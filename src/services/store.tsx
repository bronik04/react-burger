import { configureStore } from '@reduxjs/toolkit';
import ingredientReducer from './ingredients/ingredients-slice';
import orderReducer from './order/order-slice';
import constructorReducer from './constructor/constructor-slice';
import authReducer from './auth/auth-slice';
import wsSlice, { wsActions } from './web-socket/ws-slice';
import { socketMiddleware } from './web-socket/socket-middleware';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const store = configureStore({
  reducer: {
    ingredients: ingredientReducer,
    burger: constructorReducer,
    order: orderReducer,
    auth: authReducer,
    webSocket: wsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socketMiddleware(wsActions)),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
