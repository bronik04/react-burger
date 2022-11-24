import { methods, NORMA_API_URL } from './consts';

const createOptions = (method, data, auth) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
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
    `${NORMA_API_URL}/orders`,
    createOptions(methods.post, { ingredients }),
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
  try {
    const res = await fetch(
      `${NORMA_API_URL}/auth/login`,
      createOptions(methods.post, form),
    );
    return checkResponse(res);
  } catch (e) {
    return e.message;
  }
};

export const refreshTokenRequest = async token => {
  const res = await fetch(
    `${NORMA_API_URL}/auth/logout`,
    createOptions(methods.post, token),
  );
  return checkResponse(res);
};

export const logoutRequest = async token => {
  const res = await fetch(
    `${NORMA_API_URL}/auth/logout`,
    createOptions(methods.post, token),
  );
  return checkResponse(res);
};
