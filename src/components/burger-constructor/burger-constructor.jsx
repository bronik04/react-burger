import React from 'react';
import Styles from './burger-constructor.module.css';
import {
  Button,
  ConstructorElement,
  DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../utils/data";
import TotalPrice from "../total-price/total-price";

const BurgerConstructor = ({ingredients}) => {
  console.log(ingredients)
  return (
    <div className={`${Styles.main}`}>
    <div className={`mt-25 mb-10 ${Styles.container}`}>
        <ConstructorElement
          extraClass={`ml-8`}
          type={"top"} isLocked={true}
          text={data[0].name}
          thumbnail={data[0].image}
          price={data[0].price}
        />

      <ul className={`${Styles.list}`}>
        {
          ingredients.map(item => {
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
      </ul>

      <ConstructorElement
        extraClass={`ml-8`}
        type={"bottom"} isLocked={true}
        text={data[0].name}
        thumbnail={data[0].image}
        price={data[0].price}/>
    </div>
      <div className={Styles.order}>
        <TotalPrice sum={data[0].price*2}/>
        <Button htmlType={"button"} type="primary" size="large">
          Оформить заказ
        </Button>
      </div>

    </div>
  );
};

export default BurgerConstructor;
