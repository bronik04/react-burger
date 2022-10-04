import React from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "./burger-ingredients.module.css";
import IngredientList from "../ingredients-list/ingredients-list";

const BurgerIngredients = () => {

  const [current, setCurrent] = React.useState('one');

  return (
    <section className={`pt-10`} style={{maxWidth: 600}}>
      <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>

      <div className={`mb-10 ${Styles.tab_container}`}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <div className={`${Styles.scroll_container}`}>
        <IngredientList title={'Булки'} type={'bun'}/>
        <IngredientList title={'Соусы'} type={'sauce'}/>
      </div>
    </section>
  );
};

export default BurgerIngredients;
