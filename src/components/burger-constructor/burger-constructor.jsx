import React from 'react';
import Styles from './burger-constructor.module.css';
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../utils/data";
import TotalPrice from "../total-price/total-price";

const burgerConstructor = (props) => {
  return (
    <div className={`${Styles.main}`}>
      <ul className={`mt-25 mb-10 ml-4 mr-4 ${Styles.list}`}>
        <li className={`ml-8`}>
          <ConstructorElement
            type={"top"} isLocked={true}
            text={data[0].name}
            thumbnail={data[0].image}
            price={data[0].price}/>
        </li>
        {
          data.map(item => {
            return ( (item.type === 'main') &&
              <li key={item._id} className={Styles.list__item}>
                <DragIcon type={"primary"}/>
                <ConstructorElement
                  isLocked={false}
                  text={item.name}
                  thumbnail={item.image}
                  price={item.price}/>
              </li>
            )
          })
        }
        <li className={`ml-8`}>
          <ConstructorElement
            type={"bottom"} isLocked={true}
            text={data[0].name}
            thumbnail={data[0].image}
            price={data[0].price}/>
        </li>
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
