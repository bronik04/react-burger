import React from 'react';
import styles from '../../components/ingredient-details/ingredient-details.module.scss';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';

const IngredientPage = () => {

  return (
    <section className={`pl-10 pr-10 pb-15 ${styles.container}`}>
      <h1 className={`text text_type_main-large mt-25`}>
        Детали ингредиента
      </h1>
        <IngredientDetails />
    </section>
  );
};

export default IngredientPage;
