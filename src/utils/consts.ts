import {getCookie} from "./cookie";

export const NORMA_API_URL = 'https://norma.nomoreparties.space/api';
export const wsUrl = 'wss://norma.nomoreparties.space/orders';

export const methods = {
  get: 'GET',
  post: 'POST',
  delete: 'DELETE',
  path: 'PATCH',
  put: 'PUT',
};

export const refreshToken = getCookie('refreshToken');
export const accessToken = getCookie('accessToken');