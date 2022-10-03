import React from 'react';
import Styles from './burger-constructor.module.css';
import {
  Button,
  ConstructorElement,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorCard from "../constructor-card/constructor-card";
import data from "../../utils/data";
import TotalPrice from "../total-price/total-price";

const burgerConstructor = (props) => {
  return (
    <div className={`${Styles.main}`}>
      <ul className={`mt-25 mb-10 ${Styles.list}`}>
        <li><ConstructorElement type={"top"} isLocked={false}
                                text={data[0].name} thumbnail={data[0].image}
                                price={data[0].price}/></li>
        <li><ConstructorElement isLocked={false}
                                text={data[0].name} thumbnail={data[0].image}
                                price={data[0].price}/></li>
        <li><ConstructorElement isLocked={false}
                                text={data[0].name} thumbnail={data[0].image}
                                price={data[0].price}/></li>
        <li><ConstructorElement isLocked={false}
                                text={data[0].name} thumbnail={data[0].image}
                                price={data[0].price}/></li>
        <li><ConstructorElement isLocked={false}
                                text={data[0].name} thumbnail={data[0].image}
                                price={data[0].price}/></li>
        <li><ConstructorElement isLocked={false}
                                text={data[0].name} thumbnail={data[0].image}
                                price={data[0].price}/></li>
        <li><ConstructorElement type={"bottom"} isLocked={false}
                                text={data[0].name} thumbnail={data[0].image}
                                price={data[0].price}/></li>
      </ul>
      <div className={Styles.order}>
        <TotalPrice/>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>

    </div>
  );
};

export default burgerConstructor;
