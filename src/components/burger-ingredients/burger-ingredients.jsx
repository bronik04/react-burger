import React, { useEffect, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.scss';
import IngredientList from '../ingredients-list/ingredients-list';
import { useInView } from 'react-intersection-observer';

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('bun');
  const handleCurrentTab = evt => {
    setCurrent(evt);
    document.getElementById(evt).scrollIntoView({ behavior: 'smooth' });
  };

  const options = {
    threshold: 0,
    delay: 100,
  };

  const [bunRef, inViewBun] = useInView(options);
  const [mainRef, inViewMain] = useInView(options);
  const [sauceRef, inViewSauce] = useInView(options);

  useEffect(() => {
    if (inViewBun) {
      setCurrent('bun');
    } else if (inViewSauce) {
      setCurrent('sauce');
    } else if (inViewMain) {
      setCurrent('main');
    }
  }, [inViewBun, inViewMain, inViewSauce]);

  return (
    <section className={`pt-10 ${styles.burger_ingredient}`}>
      <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>

      <div className={`mb-10 ${styles.tab_container}`}>
        <Tab
          value='bun'
          active={current === 'bun'}
          onClick={handleCurrentTab}
        >
          Булки
        </Tab>
        <Tab
          value='sauce'
          active={current === 'sauce'}
          onClick={handleCurrentTab}
        >
          Соусы
        </Tab>
        <Tab
          value='main'
          active={current === 'main'}
          onClick={handleCurrentTab}
        >
          Начинки
        </Tab>
      </div>

      <div className={`${styles.scroll_container}`}>
        <IngredientList
          title={'Булки'}
          type={'bun'}
          ref={bunRef}
        />
        <IngredientList
          title={'Соусы'}
          type={'sauce'}
          ref={sauceRef}
        />
        <IngredientList
          title={'Начинки'}
          type={'main'}
          ref={mainRef}
        />
      </div>
    </section>
  );
};

export default BurgerIngredients;
