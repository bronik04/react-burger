import React, { forwardRef } from 'react';
import IngredientCard from '../ingredient-card/ingredient-card';
import styles from './ingredients-list.module.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const IngredientList = forwardRef(({ title, type }, ref) => {
  const { ingredients, request } = useSelector(
    state => state.ingredientReducer,
  );

  return (
    <section className={`mb-10`}>
      {request && <h2>Загрузка...</h2>}
      <h3
        className={`text text_type_main-medium pb-6`}
        id={type}
      >
        {title}
      </h3>
      <ul
        className={`${styles.ingredient__list}`}
        ref={ref}
      >
        {ingredients.map(ingredient => {
          return (
            ingredient.type === type && (
              <IngredientCard
                ingredient={ingredient}
                key={ingredient._id}
              />
            )
          );
        })}
      </ul>
    </section>
  );
});

IngredientList.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default IngredientList;
