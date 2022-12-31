import { createSlice } from '@reduxjs/toolkit';
import {deleteCookie, setCookie} from '../../utils/cookie';
import {
  fetchGetUser,
  fetchLogin,
  fetchLogout, fetchRefreshToken,
  fetchRegister
} from "./auth-async-thunks";

const initialState = {
  user: {
    name: '',
    email: '',
  },
  isAuth: false,
  isLogout: false,
  pending: false,
  error: false,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRegister.fulfilled, (state, action) => {
        //state.isAuth = true;
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
        (state) => {
          state.pending = true;
          state.error = false;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.pending = false;
          state.error = false;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state) => {
          state.pending = false;
          state.error = true;
        },
      );
  },
});
export default authSlice.reducer;
