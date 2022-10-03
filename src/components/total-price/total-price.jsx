import React from 'react';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from './total-price.module.css';
const TotalPrice = () => {
  return (
    <div className={`${Styles.icon_big} ${Styles.total_container}`}>
         <span className="text text_type_digits-medium">
          610
        </span>
      <CurrencyIcon type={"primary"}/>
    </div>
  );
};

export default TotalPrice;
