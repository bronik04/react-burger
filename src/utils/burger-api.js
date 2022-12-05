import { methods, NORMA_API_URL } from './consts';
import { getCookie } from './cookie';

const createOptions = (method, data) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
};

export const checkResponse = res => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const fetchIngredients = async () => {
  const res = await fetch(`${NORMA_API_URL}/ingredients`);
  return checkResponse(res);
};

export const sendOrder = async ingredients => {
  const res = await fetch(
    `${NORMA_API_URL}/orders`, {
      method: methods.post,
      body: JSON.stringify({ingredients}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('accessToken'),
      }
    }
  );
  return checkResponse(res);
};

export const registerRequest = async form => {
  const res = await fetch(
    `${NORMA_API_URL}/auth/register`,
    createOptions(methods.post, form),
  );
  return checkResponse(res);
};

export const resetPassword = async email => {
  const res = fetch(
    `${NORMA_API_URL}/password-reset`,
    createOptions(methods.post, email),
  );
  return checkResponse(res);
};

export const updatePassword = async form => {
  const res = fetch(
    `${NORMA_API_URL}/password-reset/reset`,
    createOptions(methods.post, form),
  );
  return checkResponse(res);
};

export const loginRequest = async form => {
  const res = await fetch(
    `${NORMA_API_URL}/auth/login`,
    createOptions(methods.post, form),
  );
  return checkResponse(res);
};

export const getUserRequest = async () => {
  const res = await fetch(`${NORMA_API_URL}/auth/user`, {
    method: methods.get,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getCookie('accessToken'),
    },
  });
  return checkResponse(res);
};

export const updateUserRequest = async form => {
  const res = await fetch(`${NORMA_API_URL}/auth/user`, {
    method: methods.path,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getCookie('accessToken'),
    },
    body: JSON.stringify(form),
  });
  return checkResponse(res);
};

export const refreshTokenRequest = async () => {
  const token = getCookie('refreshToken');
  const res = await fetch(
    `${NORMA_API_URL}/auth/token`,
    createOptions(methods.post, { token }),
  );
  return checkResponse(res);
};

export const logoutRequest = async () => {
  const token = getCookie('refreshToken');
  const res = await fetch(
    `${NORMA_API_URL}/auth/logout`,
    createOptions(methods.post, { token }),
  );
  return checkResponse(res);
};
