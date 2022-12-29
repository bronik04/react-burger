import { methods, NORMA_API_URL } from './consts';
import { createOptions, request } from './api-utils';
import { getCookie } from './cookie';
import { refreshToken as token } from './consts';

// export const fetchIngredients = () => {
//   return request(`${NORMA_API_URL}/ingredients`);
// };

export const sendOrder = ingredients => {
  return request(
    `${NORMA_API_URL}/orders`,
    createOptions(
      methods.post,
      { ingredients },
      getCookie('accessToken'),
    ),
  );
};

export const registerRequest = form => {
  return request(
    `${NORMA_API_URL}/auth/register`,
    createOptions(methods.post, form),
  );
};

export const resetPassword = email => {
  return request(
    `${NORMA_API_URL}/password-reset`,
    createOptions(methods.post, email),
  );
};

export const updatePassword = form => {
  return request(
    `${NORMA_API_URL}/password-reset/reset`,
    createOptions(methods.post, form),
  );
};

export const loginRequest = form => {
  return request(
    `${NORMA_API_URL}/auth/login`,
    createOptions(methods.post, form),
  );
};

export const getUserRequest = () => {
  return request(
    `${NORMA_API_URL}/auth/user`,
    createOptions(methods.get, undefined, getCookie('accessToken')),
  );
};

export const updateUserRequest = form => {
  return request(
    `${NORMA_API_URL}/auth/user`,
    createOptions(methods.path, form, getCookie('accessToken')),
  );
};

export const refreshTokenRequest = () => {
  return request(
    `${NORMA_API_URL}/auth/token`,
    createOptions(methods.post, { token }),
  );
};

export const logoutRequest = () => {
  return request(
    `${NORMA_API_URL}/auth/logout`,
    createOptions(methods.post, { token }),
  );
};
