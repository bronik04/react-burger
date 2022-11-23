import { methods, NORMA_API_URL } from './consts';

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
    `${NORMA_API_URL}/orders`,
    createOptions(methods.post, { ingredients }),
  );
  return checkResponse(res);
};

export const reset = async () => {
  const res = fetch(
    `${NORMA_API_URL}/password-reset`,
    createOptions(methods.post, { email: '' }),
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

export const registerRequest = async form => {
  let res = await fetch(
    `${NORMA_API_URL}/auth/register`,
    createOptions(methods.post, form),
  );
  return checkResponse(res);
};

//norma.nomoreparties.space/api/auth/login - эндпоинт для авторизации.
//norma.nomoreparties.space/api/auth/register - эндпоинт для регистрации пользователя.
//norma.nomoreparties.space/api/auth/logout - эндпоинт для выхода из системы.
//norma.nomoreparties.space/api/auth/token - эндпоинт обновления токена.
