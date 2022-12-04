import {useSelector} from "react-redux";

export function useIngredientInfo(ingredientsId) {
  const allIngredients = useSelector(
    state => state.ingredientReducer.ingredients,
  );

  const ingredientsWithInfo = allIngredients.filter(({ _id }) =>
    ingredientsId.includes(_id),
  );

  return ingredientsWithInfo;
}