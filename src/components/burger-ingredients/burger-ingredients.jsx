import React, {useEffect, useState} from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import Styles from "./burger-ingredients.module.css";
import IngredientList from "../ingredients-list/ingredients-list";
import Modal from "../modal/modal";
import IngredientCard from "../ingredient-card/ingredient-card";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredients = ({ingredients}) => {

  const [current, setCurrent] = React.useState('bun');

  // Модальное окно

  const [isModalOpened, setIsModalOpened] = useState(false);

  const closeAllModals = () => {
    setIsModalOpened(false);
  }

  const handleEscKeydown = (event) => {
    event.key === "Escape" && closeAllModals();
  };

  const handleModalOpen = (evt) => {
    setIsModalOpened(true);
    console.log(evt.currentTarget);
  }


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
        <IngredientList onClick={handleModalOpen} title={'Булки'} type={'bun'} ingredients={ingredients}/>
        <IngredientList onClick={handleModalOpen} title={'Соусы'} type={'sauce'} ingredients={ingredients}/>
        <IngredientList onClick={handleModalOpen} title={'Начинки'} type={'main'} ingredients={ingredients}/>
      </div>
      {
        isModalOpened &&
        <Modal
          title={'Детали ингредиента'}
          onOverlayClick={closeAllModals}
          onEscKeydown={handleEscKeydown}
        >
          <IngredientDetails
            close={closeAllModals}
            ingredients={ingredients}
            image={ingredients[0].image_large}
            name={ingredients[0].name}
            calories={ingredients[0].calories}
            proteins={ingredients[0].proteins}
            fat={ingredients[0].fat}
            carbohydrates={ingredients[0].carbohydrates}
          />
        </Modal>
      }
    </section>
  );
};


export default BurgerIngredients;
