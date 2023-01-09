import { createSlice } from '@reduxjs/toolkit';
import { deleteCookie, setCookie } from '../../utils/cookie';
import {
  fetchGetUser,
  fetchLogin,
  fetchLogout,
  fetchRefreshToken,
  fetchRegister,
} from './auth-async-thunks';
import { IUser, TStatus } from '../../types';

export type TAuthSlice = {
  user: IUser;
  isAuth: boolean;
  isLogout: boolean;
  status: TStatus;
  error: string | null;
};

const initialState: TAuthSlice = {
  user: {
    name: '',
    email: '',
  },
  isAuth: false,
  isLogout: false,

  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: '@@auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        setCookie('accessToken', action.payload.accessToken);
        setCookie('refreshToken', action.payload.refreshToken);
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.isAuth = true;
        setCookie('accessToken', action.payload.accessToken);
        setCookie('refreshToken', action.payload.refreshToken);
      })
      .addCase(fetchGetUser.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.isLogout = true;
        state.isAuth = false;
        state.user.name = '';
        state.user.email = '';
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
      })
      .addCase(fetchRefreshToken.fulfilled, (state, action) => {
        state.isAuth = true;
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        setCookie('accessToken', action.payload.accessToken);
        setCookie('refreshToken', action.payload.refreshToken);
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.status = 'loading';
          state.error = action.payload || 'Cannot load data';
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.status = 'success';
          state.error = action.payload || 'Cannot load data';
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = 'rejected';
          state.error = action.payload || 'Cannot load data';
        },
      );
  },
});
export default authSlice.reducer;
