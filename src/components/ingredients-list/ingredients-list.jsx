import React, {useEffect, useState} from 'react';
import data from "../../utils/data";
import ProductCard from "../product-card/product-card";
import ingredient_styles from "./ingredients-list.module.css";
import PropTypes from "prop-types";


const IngredientList = ({title, type, ingredients }) => {

  console.log(ingredients);

  return (
    <section className={`mb-10`}>
      <h3 className={`text text_type_main-medium pb-6`}>{title}</h3>
      <ul className={`${ingredient_styles.ingredient__list}`}>
        {
          ingredients.map(item => {
            return (item.type === type &&
              <li key={item._id}>
                <ProductCard
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  // count={item.__v}
                />
              </li>
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
