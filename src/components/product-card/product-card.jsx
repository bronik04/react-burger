import React from 'react';
import '../../utils/data';
import Styles from './product-card.module.css';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

const ProductCard = ({name, image, price, count}) => {
  return (
    <div>
      <article className={`${Styles.card}`}>
        {count && <Counter count={count}/>}
        <img className={`pl-4 pr-4 ${Styles.img}`} src={image} alt={name}/>
        <p className={`mt-1 mb-1 text ${Styles.price}`}>
          {price}
          <CurrencyIcon type={"primary"}/>
        </p>
        <p className={`text text_type_main-default ${Styles.name}`}>{name}</p>
      </article>
    </div>
  );
};

export default ProductCard;
