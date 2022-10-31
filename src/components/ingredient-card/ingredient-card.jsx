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
import { useDispatch } from 'react-redux';
import { addIngredient } from '../../services/slices/constructor-slice';

const IngredientCard = ({ ingredient }) => {

  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: monitor => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const [isModalOpened, setIsModalOpened] = useState(false);
  const closeModal = () => {
    setIsModalOpened(false);
  };

  const handleModalOpen = () => {
    setIsModalOpened(true);
  };

  const dispatch = useDispatch();

  return (
    !isDrag && (
      <>
        <li
          className={`${styles.card}`}
          ref={dragRef}
        >
          {ingredient.__v > 0 && <Counter count={ingredient.__v}/>}
          <img
            className={`pl-4 pr-4 ${styles.img}`}
            src={ingredient.image}
            alt={ingredient.name}
            onClick={() => dispatch(addIngredient(ingredient))}
          />
          <p className={`mt-1 mb-1 text ${styles.price}`}>
            {ingredient.price}
            {ingredient.price && <CurrencyIcon type={'primary'} />}
          </p>
          <p
            className={`text text_type_main-default ${styles.name}`}
            onClick={handleModalOpen}
          >
            {ingredient.name}
          </p>
        </li>

        {isModalOpened && (
          <Modal
            title={`Детали ингредиента`}
            closeModal={closeModal}
          >
            <IngredientDetails ingredient={ingredient} />
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
