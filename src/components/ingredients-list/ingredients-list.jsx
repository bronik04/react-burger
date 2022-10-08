import React, {useEffect, useState} from 'react';
import IngredientCard from "../ingredient-card/ingredient-card";
import ingredient_styles from "./ingredients-list.module.css";
import PropTypes from "prop-types";


const IngredientList = ({title, type, ingredients, onClick }) => {

  return (
    <section className={`mb-10`}>
      <h3 className={`text text_type_main-medium pb-6`}>{title}</h3>
      <ul className={`${ingredient_styles.ingredient__list}`}>
        {
          ingredients.map(ingredient => {
            return (ingredient.type === type &&
                <IngredientCard
                  onClick={onClick}
                  ingredient={ingredient}
                  key={ingredient._id}
                />
            )
          })
        }
      </ul>
    </section>
  );
};

IngredientList.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  ingredients: PropTypes.array.isRequired,
}

export default IngredientList;
