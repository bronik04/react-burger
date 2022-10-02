import React from 'react';
import {Tab, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ProductCard from "../product-card/product-card";
import Styles from "./burger-ingredients.module.css";
import data from "../../utils/data";

const BurgerIngredients = () => {
  return (
    <div style={{maxWidth: 600}}>
      {/*todo Добавить табы*/}
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <section className={`pt-10 pb-10`}>
        <h3 className={`text text_type_main-medium pb-6`}>Булки</h3>
        <ul className={`${Styles.list}`}>
          <li>
            <ProductCard
            image={data[0].image}
            name={data[0].name}
            price={data[0].price}
            count={data[0].__v}
          />
          </li>
          <li>
              <ProductCard
                image={data[1].image}
                name={data[1].name}
                price={data[1].price}
                count={data[1].__v}

              />
          </li>
        </ul>
      </section>
      <section>
        <h3 className={`text text_type_main-medium pb-6`}>Соусы</h3>
        <ul className={`${Styles.list}`}>
          <li>
            <ProductCard
              image={data[2].image}
              name={data[2].name}
              price={data[2].price}
              count={data[2].__v}
            />
          </li>
          <li>
            <ProductCard
              image={data[3].image}
              name={data[3].name}
              price={data[3].price}
              count={data[3].__v}
            />
          </li>
          <li>
            <ProductCard
              image={data[4].image}
              name={data[4].name}
              price={data[4].price}
              count={data[4].__v}
            />
          </li>
          <li>
            <ProductCard
              image={data[5].image}
              name={data[5].name}
              price={data[5].price}
              count={data[5].__v}
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default BurgerIngredients;
