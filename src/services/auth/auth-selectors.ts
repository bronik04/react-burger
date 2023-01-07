import {RootState} from "../store";

export const selectAuth = (state: RootState) => state.auth;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectAuthUser = (state: RootState) => state.auth.user;