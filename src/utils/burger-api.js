import {NORMA_API_URL} from "./consts";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getIngredientsData = () => {
  return  fetch(`${NORMA_API_URL}ingredients`)
    .then(checkResponse);
}
