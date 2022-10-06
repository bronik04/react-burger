import React from 'react';
import PropTypes from "prop-types";
import '../../utils/data';
import Styles from './product-card.module.css';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

const ProductCard = ({name, image, price, count, onClick}) => {
  return (
      <article onClick={onClick} className={`${Styles.card}`}>
        {count && <Counter count={count}/>}
        <img className={`pl-4 pr-4 ${Styles.img}`} src={image} alt={name}/>
        <p className={`mt-1 mb-1 text ${Styles.price}`}>
          {price}
          {price && <CurrencyIcon type={"primary"}/>}
        </p>
        <p className={`text text_type_main-default ${Styles.name}`}>{name}</p>
      </article>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number
}

export default ProductCard;
