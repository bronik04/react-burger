import {useSelector} from "react-redux";

export function useIngredientInfo(ingredientsId) {
  const allIngredients = useSelector(
    state => state.ingredientReducer.ingredients,
  );

  const ingredientsWithInfo = ingredientsId.map( id =>
    allIngredients.find(ingredient => ingredient._id === id)
  );

  return ingredientsWithInfo;
}