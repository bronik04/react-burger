import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getUserRequest,
  loginRequest,
  logoutRequest,
  refreshTokenRequest,
  registerRequest,
  resetPassword,
  updatePassword,
  updateUserRequest,
} from '../../utils/burger-api';
import {deleteCookie, setCookie} from '../../utils/cookie';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  isAuth: false,
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

export const fetchGetUser = createAsyncThunk(
  'auth/fetchGetUser',
  getUserRequest,
);

export const fetchUpdateUser = createAsyncThunk(
  'auth/fetchUpdateUser',
  updateUserRequest,
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
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        setCookie('accessToken', action.payload.accessToken);
        setCookie('refreshToken', action.payload.refreshToken);
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        setCookie('accessToken', action.payload.accessToken);
        setCookie('refreshToken', action.payload.refreshToken);
      })
      .addCase(fetchGetUser.fulfilled, (state, action) => {
        state.isAuth = true;
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.isAuth = false;
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
      })
      .addCase(fetchRefreshToken.fulfilled, (state, action) => {
        state.isAuth = true;
        setCookie('accessToken', action.payload.accessToken);
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state) => {
          state.pending = true;
          state.error = false;
        },
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state) => {
          state.pending = false;
          state.error = false;
        },
      ).addMatcher(
        action => action.type.endsWith('/rejected'),
        (state) => {
          state.pending = false;
          state.error = true;
        },
      );
  },
});

export default authSlice.reducer;
