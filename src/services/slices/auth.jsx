import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteCookie, setCookie } from '../../utils/cookie';

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
  async (form, { rejectWithValue, extra: api }) => {
    try {
      return api.registerRequest(form);
    } catch (e) {
      rejectWithValue(e.message);
    }
  },
);
export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (form, { rejectWithValue, extra: api }) => {
    try {
      return api.loginRequest(form);
    } catch (e) {
      rejectWithValue(e.message);
    }
  },
);

export const fetchGetUser = createAsyncThunk(
  'auth/fetchGetUser',
  async (_, { rejectWithValue, extra: api }) => {
    try {
      return api.getUserRequest();
    } catch (e) {
      rejectWithValue(e.message);
    }
  },
);

export const fetchUpdateUser = createAsyncThunk(
  'auth/fetchUpdateUser',
  async (form, { rejectWithValue, extra: api }) => {
    try {
      return api.updateUserRequest(form);
    } catch (e) {
      rejectWithValue(e.message);
    }
  },
);

export const fetchRefreshToken = createAsyncThunk(
  'auth/fetchRefreshToken',
  async (_, { rejectWithValue, extra: api }) => {
    try {
      return api.refreshTokenRequest();
    } catch (e) {
      rejectWithValue(e.message);
    }
  },
);
export const fetchResetPassword = createAsyncThunk(
  'auth/fetchResetPassword',
  async (form, { rejectWithValue, extra: api }) => {
    try {
      return api.resetPassword(form);
    } catch (e) {
      rejectWithValue(e.message);
    }
  },
);
export const fetchUpdatePassword = createAsyncThunk(
  'auth/fetchUpdatePassword',
  async (form, { rejectWithValue, extra: api }) => {
    try {
      return api.updatePassword(form);
    } catch (e) {
      rejectWithValue(e.message);
    }
  },
);
export const fetchLogout = createAsyncThunk(
  'auth/fetchLogout',
  async (_, { rejectWithValue, extra: api }) => {
    try {
      return api.logoutRequest();
    } catch (e) {
      rejectWithValue(e.message);
    }
  },
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
      .addCase(fetchLogout.fulfilled, state => {
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
        state => {
          state.pending = true;
          state.error = false;
        },
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.pending = false;
          state.error = false;
        },
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        state => {
          state.pending = false;
          state.error = true;
        },
      );
  },
});

export default authSlice.reducer;
