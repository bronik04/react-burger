import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginRequest, registerRequest } from '../../utils/burger-api';

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
export const fetchLogin = createAsyncThunk('auth/fetchLogin', loginRequest);

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
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(fetchLogin.rejected, state => {
        state.pending = false;
        state.error = true;
      })
  },
});

export default authSlice.reducer;
