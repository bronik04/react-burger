import React from 'react';
import styles from './ingredient-details.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ingredientPropType} from '../../utils/prop-types';
import PropTypes from 'prop-types';

const IngredientDetails = ({ingredient, closeModal}) => {

  return (
    <section className={`p-10 ${styles.container}`}>
      <header className={styles.header}>
        <h3 className={`text text_type_main-medium`}>
          Детали ингредиента
        </h3>
        <button
          onClick={closeModal}
          className={styles.close}
        >
          <CloseIcon type={'primary'}/>
        </button>
      </header>
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
  closeModal: PropTypes.func.isRequired
}

export default IngredientDetails;

