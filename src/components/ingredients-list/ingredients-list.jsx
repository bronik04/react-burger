import React from 'react';
import Styles from "../burger-ingredients/burger-ingredients.module.css";
import data from "../../utils/data";
import ProductCard from "../product-card/product-card";
import ingredient_styles from "./ingredients-list.module.css";

const IngredientList = ({title, type}) => {
  return (
    <section className={`mb-10`}>
      <h3 className={`text text_type_main-medium pb-6`}>{title}</h3>
      <ul className={`${ingredient_styles.ingredient__list}`}>
        {
          data.map(item => {
            return (item.type === type &&
              <li key={item._id}>
                <ProductCard
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  count={item.__v}
                />
              </li>
            )
          })
        }
      </ul>
    </section>
  );
};

export default IngredientList;
