import {NORMA_API_URL} from "./consts";

export const getIngredientsData = () => {
  return  fetch(`${NORMA_API_URL}ingredients`)
    .then(res => res.json());
}