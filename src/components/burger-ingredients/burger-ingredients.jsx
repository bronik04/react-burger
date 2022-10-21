import React, { useEffect, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientList from '../ingredients-list/ingredients-list';

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('bun');

  useEffect(() => {
    document
      .querySelector(`#${current}`)
      .scrollIntoView({ behavior: 'smooth' });
  }, [current]);

  return (
    <section className={`pt-10 ${styles.burger_ingredient}`}>
      <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>

      <div className={`mb-10 ${styles.tab_container}`}>
        <Tab
          value='bun'
          active={current === 'bun'}
          onClick={setCurrent}
        >
          Булки
        </Tab>
        <Tab
          value='sauce'
          active={current === 'sauce'}
          onClick={setCurrent}
        >
          Соусы
        </Tab>
        <Tab
          value='main'
          active={current === 'main'}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </div>

      <div className={`${styles.scroll_container}`}>
        <IngredientList
          title={'Булки'}
          type={'bun'}
        />
        <IngredientList
          title={'Соусы'}
          type={'sauce'}
        />
        <IngredientList
          title={'Начинки'}
          type={'main'}
        />
      </div>
    </section>
  );
};

export default BurgerIngredients;
