import React from 'react';
import styles from '../../components/ingredient-details/ingredient-details.module.scss';
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";

const IngredientPage = () => {

  const { id } = useParams();
  const ingredients = useSelector(state => state.ingredientReducer.ingredients);
  const currentIngredient = ingredients.find(ingredient => ingredient._id === id);

  return (
    currentIngredient && (
      <section className={`pl-10 pr-10 pb-15 ${styles.container}`}>
        <h1 className={`text text_type_main-large mt-25`}>Детали ингредиента</h1>
        <img
          className={`mb-4`}
          src={currentIngredient.image_large}
          alt={currentIngredient.name}
        />
        <p className={`text text_type_main-medium mb-5`}>
          {currentIngredient.name}
        </p>
        <div
          className={`text text_type_main-default text_color_inactive ${styles.energy_value}`}
        >
          <p className={styles.text}>Калории,ккал</p>
          <span className={styles.calories}>{currentIngredient.calories}</span>
          <p className={styles.text}>Белки, г</p>
          <span className={styles.proteins}>{currentIngredient.proteins}</span>
          <p className={styles.text}>Жиры, г</p>
          <span className={styles.fat}>{currentIngredient.fat}</span>
          <p className={styles.text}>Углеводы, г</p>
          <span className={styles.carbohydrates}>
            {currentIngredient.carbohydrates}
          </span>
        </div>
      </section>
    )
  );
};

export default IngredientPage;
