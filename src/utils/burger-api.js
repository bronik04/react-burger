import { NORMA_API_URL } from './consts';
import {createAsyncThunk} from "@reduxjs/toolkit";

const checkResponse = res => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getIngredientsData = () => {
  return  fetch(`${NORMA_API_URL}ingredients`)
    .then(checkResponse);
}

export const getIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async function () {
    const response = await fetch(`${NORMA_API_URL}ingredients`);
    if (response.ok){
      return await response.json();
    }
  },
);

export const sendOrder = (ingredients) => {
  return fetch(`${NORMA_API_URL}orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ingredients }),
  }).then(checkResponse)
}
