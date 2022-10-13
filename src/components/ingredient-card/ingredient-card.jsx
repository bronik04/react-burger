import React, {useState} from 'react';
import styles from './product-card.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import {ingredientPropType} from '../../utils/prop-types';

const IngredientCard = ({ingredient}) => {

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [count, setCount] = useState(0);

  const closeAllModals = () => {
    setIsModalOpened(false);
  }

  const handleModalOpen = () => {
    setIsModalOpened(true);
  }

  const addToOrder = () => {
    setCount(count+ 1);
  }

  return (
    <>
      <li
        onClick={handleModalOpen}
        className={`${styles.card}`}
      >
        {count > 0 && <Counter count={count}/>}
        <img className={`pl-4 pr-4 ${styles.img}`}
             src={ingredient.image}
             alt={ingredient.name}
             onClick={addToOrder}
        />
        <p className={`mt-1 mb-1 text ${styles.price}`}>
          {ingredient.price}
          {ingredient.price && <CurrencyIcon type={'primary'}/>}
        </p>
        <p className={`text text_type_main-default ${styles.name}`}>
          {ingredient.name}
        </p>
      </li>

      {
        isModalOpened &&
        <Modal
          title={`Детали ингредиента`}
          closeAllModals={closeAllModals}
        >
          <IngredientDetails
            ingredient={ingredient}
          />
        </Modal>
      }
    </>
  );
};

IngredientCard.propTypes = {
  ingredient: ingredientPropType.isRequired
}

export default IngredientCard;
