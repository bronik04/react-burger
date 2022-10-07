import React from 'react';
import PropTypes from "prop-types";
import '../../utils/data';
import styles from './product-card.module.css';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientCard = ({ingredient, count, onClick}) => {
  return (
      <li onClick={onClick} className={`${styles.card}`}>
        {count && <Counter count={count}/>}
        <img className={`pl-4 pr-4 ${styles.img}`}
             src={ingredient.image}
             alt={ingredient.name}/>
        <p className={`mt-1 mb-1 text ${styles.price}`}>
          {ingredient.price}
          {ingredient.price && <CurrencyIcon type={"primary"}/>}
        </p>
        <p className={`text text_type_main-default ${styles.name}`}>
          {ingredient.name}
        </p>
      </li>
  );
};

IngredientCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number
}

export default IngredientCard;
