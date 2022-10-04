import React, {useEffect, useState} from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "./burger-ingredients.module.css";
import IngredientList from "../ingredients-list/ingredients-list";

const BurgerIngredients = () => {

  const [current, setCurrent] = React.useState('bun');

  const [ingredients, setIngredients] = useState([]);

  const url = 'https://norma.nomoreparties.space/api/ingredients';

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setIngredients(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <section className={`pt-10`} style={{maxWidth: 600}}>
      <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>

      <div className={`mb-10 ${Styles.tab_container}`}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <div className={`${Styles.scroll_container}`}>
        <IngredientList title={'Булки'} type={'bun'}/>
        <IngredientList title={'Соусы'} type={'sauce'}/>
        {/*<IngredientList title={'Начинки'} type={'main'}/>*/}
      </div>
    </section>
  );
};


export default BurgerIngredients;
