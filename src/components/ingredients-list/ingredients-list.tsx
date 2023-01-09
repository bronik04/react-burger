import React, { FC, ForwardedRef, forwardRef } from 'react';
import IngredientCard from '../ingredient-card/ingredient-card';
import styles from './ingredients-list.module.scss';
import { selectIngredientsState } from '../../services/ingredients/ingredients-selectors';
import {useAppSelector} from "../../services/store";

type TIngredientList = {
  title: string;
  type: string;
  ref?: ForwardedRef<HTMLUListElement>
};

const IngredientList: FC<TIngredientList> = forwardRef(
  ({ title, type }, ref:  ForwardedRef<HTMLUListElement>) => {
    const { ingredients, status } = useAppSelector(selectIngredientsState);

    return (
      <section className={`mb-10`}>
        {status === 'loading' && <h2>Загрузка...</h2>}
        <h3 className={`text text_type_main-medium pb-6`} id={type}>
          {title}
        </h3>
        <ul className={`${styles.ingredient__list}`} ref={ref}>
          {ingredients.map((ingredient) => {
            return (
              ingredient.type === type && (
                <IngredientCard ingredient={ingredient} key={ingredient._id} />
              )
            );
          })}
        </ul>
      </section>
    );
  },
);

export default IngredientList;
