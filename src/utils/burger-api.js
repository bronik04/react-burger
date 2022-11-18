import { NORMA_API_URL } from './consts';
//import axios from 'axios';

export const checkResponse = res => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const fetchIngredients = () =>
  fetch(`${NORMA_API_URL}/ingredients`).then(checkResponse);

export const sendOrder = ingredients => {
  return fetch(`${NORMA_API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingredients }),
  }).then(checkResponse);
};

export const reset = () => {
  return fetch(`${NORMA_API_URL}/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email: ''}),
  }).then(checkResponse);
}

export const loginRequest = async form => {
  return await fetch(`${NORMA_API_URL}/auth/login`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(form),
  });
};

//norma.nomoreparties.space/api/auth/login - эндпоинт для авторизации.
//norma.nomoreparties.space/api/auth/register - эндпоинт для регистрации пользователя.
//norma.nomoreparties.space/api/auth/logout - эндпоинт для выхода из системы.
//norma.nomoreparties.space/api/auth/token - эндпоинт обновления токена.
