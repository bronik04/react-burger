import React from 'react';
import styles from './ingredient-details.module.css';
import { ingredientPropType } from '../../utils/prop-types';

const IngredientDetails = ({ ingredient }) => {

  return (
    <section className={`pl-10 pr-10 pb-15 ${styles.container}`}>
      <img
        className={`mb-4`}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <p className={`text text_type_main-medium mb-5`}>
        {ingredient.name}
      </p>
      <div className={`text text_type_main-default text_color_inactive ${styles.energy_value}`}>
        <p className={styles.text}>
          Калории,ккал
        </p>
        <span className={styles.calories}>
          {ingredient.calories}
        </span>
        <p className={styles.text}>
          Белки, г
        </p>
        <span className={styles.proteins}>
          {ingredient.proteins}
        </span>
        <p className={styles.text}>
          Жиры, г
        </p>
        <span className={styles.fat}>
          {ingredient.fat}
        </span>
        <p className={styles.text}>
          Углеводы, г
        </p>
        <span className={styles.carbohydrates}>
          {ingredient.carbohydrates}
        </span>
      </div>
    </section>
  );
};

IngredientDetails.propTypes = {
  ingredient: ingredientPropType.isRequired,
}

export default IngredientDetails;

