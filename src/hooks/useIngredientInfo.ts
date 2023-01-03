import { useSelector } from 'react-redux';
import { selectIngredients } from '../services/ingredients/ingredients-selectors';
import { IIngredientsWithCount} from "../types";

export function useIngredientInfo(ingredientsId: string[]): IIngredientsWithCount[]{
  const allIngredients = useSelector(selectIngredients);
// todo Как проверить на undefined без восклицательного знака?
  const ingredientsWithInfo = ingredientsId?.map((id) =>
    allIngredients.find((ingredient) => ingredient?._id === id)!,
  );


  const uniqueIngredients = Array.from(new Set(ingredientsWithInfo));

  const ingredientsWithCount = uniqueIngredients.map((ingredient) => ({
    ...ingredient,
    count: ingredientsWithInfo.reduce((count, item) => {
      if (ingredient?._id === item!._id) {
        count += 1;
      }
      return count;
    }, 0),
  }));

  return ingredientsWithCount;
}
