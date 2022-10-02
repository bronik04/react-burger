import React from 'react';
import Styles from './burger-constructor.module.css';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorCard from "../constructor-card/constructor-card";
import data from "../../utils/data";

const burgerConstructor = (props) => {
  return (
    <div className={`${Styles.main}`}>
      <ul className={`mt-25 mb-10 ${Styles.list}`}>
        <li>
          <ConstructorCard
            name={data[0].name}
            image={data[0].image_mobile}
            price={data[0].price}
          />
        </li>
        <li>
          <ConstructorCard
            name={data[1].name}
            image={data[1].image_mobile}
            price={data[1].price}
          />
        </li>
        <li>
          <ConstructorCard
            name={data[2].name}
            image={data[2].image_mobile}
            price={data[2].price}
          />
        </li>
        <li>
          <ConstructorCard
            name={data[3].name}
            image={data[3].image_mobile}
            price={data[3].price}
          />
        </li>
        <li>
          <ConstructorCard
            name={data[4].name}
            image={data[4].image_mobile}
            price={data[4].price}
          />
        </li>
        <li>
          <ConstructorCard
            name={data[5].name}
            image={data[5].image_mobile}
            price={data[5].price}
          />
        </li>
        <li>
          <ConstructorCard
            name={data[6].name}
            image={data[6].image_mobile}
            price={data[6].price}
          />
        </li>
      </ul>
      <div className={Styles.order}>
        <span className="text text_type_digits-medium">
          610
          <CurrencyIcon type={"primary"}/>
        </span>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>

    </div>
  );
};

export default burgerConstructor;
