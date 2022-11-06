import React, { useState } from 'react';
import styles from './product-card.module.css';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { ingredientPropType } from '../../utils/prop-types';
import { useDrag } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient } from '../../services/slices/constructor-slice';
import {
  clearCurrentIngredient,
  selectCurrentIngredient,
} from '../../services/slices/ingredients-slice';

const IngredientCard = ({ ingredient }) => {
  const dispatch = useDispatch();
  const { fillings, bun } = useSelector(state => state.constructorReducer);
  const [isModalOpened, setIsModalOpened] = useState(false);
  let count = 0;

  const closeModal = () => {
    setIsModalOpened(false);
    dispatch(clearCurrentIngredient(null));
  };

  const handleModalOpen = () => {
    setIsModalOpened(true);
    dispatch(selectCurrentIngredient(ingredient));
  };

  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: monitor => ({
      isDrag: monitor.isDragging(),
    }),
  });

  if (ingredient.type === 'bun') {
    if (bun !== null && bun._id === ingredient._id) {
      count = 2;
    }
  } else {
    fillings.forEach(filling =>{
      if (filling._id === ingredient._id) {
        count += 1;
      }
    });
  }

  return (
    !isDrag && (
      <>
        <li
          onClick={handleModalOpen}
          className={`${styles.card}`}
          ref={dragRef}
        >
          {count > 0 && <Counter count={count} />}
          <img
            className={`pl-4 pr-4 ${styles.img}`}
            src={ingredient.image}
            alt={ingredient.name}
          />
          <p className={`mt-1 mb-1 text ${styles.price}`}>
            {ingredient.price}
            {ingredient.price && <CurrencyIcon type={'primary'} />}
          </p>
          <p
            className={`text text_type_main-default ${styles.name}`}
          >
            {ingredient.name}
          </p>
        </li>
        {isModalOpened && (
          <Modal
            title={`Детали ингредиента`}
            closeModal={closeModal}
          >
            <IngredientDetails />
          </Modal>
        )}
      </>
    )
  );
};

IngredientCard.propTypes = {
  ingredient: ingredientPropType.isRequired,
};

export default IngredientCard;
