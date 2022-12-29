import { useSelector } from 'react-redux';
import { getIngredients } from '../services/ingredients/ingredients-selectors';

export function useIngredientInfo(ingredientsId) {
  const allIngredients = useSelector(getIngredients);

  const ingredientsWithInfo = ingredientsId?.map(
    (id) =>
      id !== null &&
      allIngredients.find((ingredient) => ingredient?._id === id),
  );

  const uniqueIngredients = Array.from(new Set(ingredientsWithInfo));

  const ingredientsWithCount = uniqueIngredients.map(
    (ingredient) => ({
      ...ingredient,
      count: ingredientsWithInfo.reduce((count, item) => {
        if (ingredient?._id === item._id) {
          count += 1;
        }
        return count;
      }, 0),
    }),
  );

  return ingredientsWithCount;
}
