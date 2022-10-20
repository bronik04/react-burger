// Тут что-то пошло не так :(
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const initialState = {
  ingredients: null,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...initialState,
        ingredients: action.payload,
      }
    // case REMOVE_INGREDIENT: {
    //   return console.log(REMOVE_INGREDIENT);
    // }
    default:
      return state;
  }
}