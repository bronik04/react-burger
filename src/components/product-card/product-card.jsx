import React from 'react';
import PropTypes from "prop-types";
import '../../utils/data';
import styles from './product-card.module.css';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

const ProductCard = ({name, image, price, count, onClick}) => {
  return (
      <article onClick={onClick} className={`${styles.card}`}>
        {count && <Counter count={count}/>}
        <img className={`pl-4 pr-4 ${styles.img}`} src={image} alt={name}/>
        <p className={`mt-1 mb-1 text ${styles.price}`}>
          {price}
          {price && <CurrencyIcon type={"primary"}/>}
        </p>
        <p className={`text text_type_main-default ${styles.name}`}>{name}</p>
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
