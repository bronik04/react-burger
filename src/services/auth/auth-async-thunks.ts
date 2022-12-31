import {createAsyncThunk} from "@reduxjs/toolkit";
import {createOptions, request} from "../../utils/api-utils";
import {
    methods,
    NORMA_API_URL,
    refreshToken as token
} from "../../utils/consts";
import {getCookie} from "../../utils/cookie";

export const fetchRegister = createAsyncThunk(
    '@@auth/fetchRegister',
    async (form, { rejectWithValue}) => {
        try {
            return request(
                `${NORMA_API_URL}/auth/register`,
                createOptions(methods.post, form),
            );
        } catch (error) {
            rejectWithValue(error);
        }
    },
);
export const fetchLogin = createAsyncThunk(
    'auth/fetchLogin',
    async (form, { rejectWithValue }) => {
        try {
            return request(
                `${NORMA_API_URL}/auth/login`,
                createOptions(methods.post, form),
            );
        } catch (e) {
            rejectWithValue(e);
        }
    },
);

export const fetchGetUser = createAsyncThunk(
    'auth/fetchGetUser',
    async (_, { rejectWithValue }) => {
        try {
            return request(
                `${NORMA_API_URL}/auth/user`,
                createOptions(methods.get, undefined, getCookie('accessToken')),
            );
        } catch (e) {
            rejectWithValue(e);
        }
    },
);

export const fetchUpdateUser = createAsyncThunk(
    'auth/fetchUpdateUser',
    async (form, { rejectWithValue}) => {
        try {
            return request(
                `${NORMA_API_URL}/auth/user`,
                createOptions(methods.path, form, getCookie('accessToken')),
            );
        } catch (e) {
            rejectWithValue(e);
        }
    },
);

export const fetchRefreshToken = createAsyncThunk(
    'auth/fetchRefreshToken',
    async (_, { rejectWithValue }) => {
        try {
            return request(
                `${NORMA_API_URL}/auth/token`,
                createOptions(methods.post, { token }),
            );
        } catch (e) {
            rejectWithValue(e)
        }
    },
);
export const fetchResetPassword = createAsyncThunk(
    'auth/fetchResetPassword',
    async (email, { rejectWithValue }) => {
        try {
            return request(
                `${NORMA_API_URL}/password-reset`,
                createOptions(methods.post, email),
            );
        } catch (e) {
            rejectWithValue(e);
        }
    },
);
export const fetchUpdatePassword = createAsyncThunk(
    'auth/fetchUpdatePassword',
    async (form, { rejectWithValue }) => {
        try {
            return request(
                `${NORMA_API_URL}/password-reset/reset`,
                createOptions(methods.post, form),
            );
        } catch (e) {
            rejectWithValue(e);
        }
    },
);
export const fetchLogout = createAsyncThunk(
    'auth/fetchLogout',
    async (_, { rejectWithValue }) => {
        try {
            return request(
                `${NORMA_API_URL}/auth/logout`,
                createOptions(methods.post, { token }),
            );
        } catch (e) {
            rejectWithValue(e);
        }
    },
);
