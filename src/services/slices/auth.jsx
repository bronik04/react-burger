import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  loginRequest,
  logoutRequest,
  refreshTokenRequest,
  registerRequest,
  resetPassword,
  updatePassword,
} from '../../utils/burger-api';
import { setCookie } from '../../utils/cookie';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  isAuth: false,
  accessToken: '',
  refreshToken: '',
  pending: false,
  error: false,
};

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  registerRequest,
);
export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  loginRequest,
);
export const fetchRefreshToken = createAsyncThunk(
  'auth/fetchRefreshToken',
  refreshTokenRequest,
);
export const fetchResetPassword = createAsyncThunk(
  'auth/fetchResetPassword',
  resetPassword,
);
export const fetchUpdatePassword = createAsyncThunk(
  'auth/fetchUpdatePassword',
  updatePassword,
);
export const fetchLogout = createAsyncThunk(
  'auth/fetchLogout',
  logoutRequest,
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRegister.pending, state => {
        state.pending = true;
        state.error = false;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.pending = false;
        state.error = false;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;

        setCookie('accessToken', action.payload.accessToken);
      })
      .addCase(fetchRegister.rejected, state => {
        state.pending = false;
        state.error = true;
      })
      .addCase(fetchLogin.pending, state => {
        state.pending = true;
        state.error = false;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.pending = false;
        state.error = false;
        state.isAuth = true;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;

        setCookie('accessToken', action.payload.accessToken);
        setCookie('refreshToken', action.payload.refreshToken);
      })
      .addCase(fetchLogin.rejected, state => {
        state.pending = true;
        state.error = false;
      })
      .addCase(fetchLogout.pending, (state, action) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(fetchLogout.fulfilled, (state, action) => {
        state.isAuth = false;
      })
      .addCase(fetchLogout.rejected, (state, action) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(fetchResetPassword.fulfilled, (state, action) => {
        state.resetPassword = true;
      });
  },
});

export default authSlice.reducer;
