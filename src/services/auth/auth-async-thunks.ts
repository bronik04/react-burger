import { createAsyncThunk } from '@reduxjs/toolkit';
import { createOptions, request } from '../../utils/api-utils';
import {Method, NORMA_API_URL, refreshToken as token} from '../../utils/consts';
import { getCookie } from '../../utils/cookie';
import {
  ILogin,
  ILogout,
  IRefreshTokenResponse,
  IRegister,
  IRejectValue,
  IResetForm,
  IResetResponse,
  IUser,
  IUserResponse,
  IUserUpdateResponse,
} from '../../types';

export const fetchRegister = createAsyncThunk<
  IUserResponse,
  IRegister,
  IRejectValue
>('@@auth/fetchRegister', async (form, { rejectWithValue }) => {
  try {
    return request(
      `${NORMA_API_URL}/auth/register`,
      createOptions(Method.post, form),
    );
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Unknown error');
  }
});
export const fetchLogin = createAsyncThunk<IUserResponse, ILogin, IRejectValue>(
  '@@auth/fetchLogin',
  async (form, { rejectWithValue }) => {
    try {
      return request(
        `${NORMA_API_URL}/auth/login`,
        createOptions(Method.post, form),
      );
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
);

export const fetchGetUser = createAsyncThunk<
  IUserResponse,
  undefined,
  IRejectValue
>('@@auth/fetchGetUser', async (_, { rejectWithValue }) => {
  try {
    return request(
      `${NORMA_API_URL}/auth/user`,
      createOptions(Method.get, undefined, getCookie('accessToken')),
    );
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Unknown error');
  }
});

export const fetchUpdateUser = createAsyncThunk<
  IUserUpdateResponse,
  IUser,
  IRejectValue
>('@@auth/fetchUpdateUser', async (form, { rejectWithValue }) => {
  try {
    return request(
      `${NORMA_API_URL}/auth/user`,
      createOptions(Method.path, form, getCookie('accessToken')),
    );
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Unknown error');
  }
});

export const fetchRefreshToken = createAsyncThunk<
  IRefreshTokenResponse,
  undefined,
  IRejectValue
>('@@auth/fetchRefreshToken', async (_, { rejectWithValue }) => {
  try {
    return request(
      `${NORMA_API_URL}/auth/token`,
      createOptions(Method.post, { token }),
    );
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Unknown error');
  }
});
export const fetchForgotPassword = createAsyncThunk<
  IResetResponse,
  object,
  IRejectValue
>('@@auth/fetchForgotPassword', async (email, { rejectWithValue }) => {
  try {
    return request(
      `${NORMA_API_URL}/password-reset`,
      createOptions(Method.post, email),
    );
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Unknown error');
  }
});
export const fetchResetPassword = createAsyncThunk<
  IResetResponse,
  IResetForm,
  IRejectValue
>('@@auth/fetchResetPassword', async (form, { rejectWithValue }) => {
  try {
    return request(
      `${NORMA_API_URL}/password-reset/reset`,
      createOptions(Method.post, form),
    );
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Unknown error');
  }
});
export const fetchLogout = createAsyncThunk<ILogout, undefined, IRejectValue>(
  '@@auth/fetchLogout',
  async (_, { rejectWithValue }) => {
    try {
      return request(
        `${NORMA_API_URL}/auth/logout`,
        createOptions(Method.post, { token }),
      );
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
);
