import React, {useState} from 'react';
import styles from './product-card.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import {ingredientPropType} from '../../utils/prop-types';
import {useDrag} from "react-dnd";

const IngredientCard = ({ingredient}) => {

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [count, setCount] = useState(0);

  const closeModal = () => {
    setIsModalOpened(false);
  }

  const handleModalOpen = () => {
    setIsModalOpened(true);
  }

  const addToOrder = () => {
    setCount(count+ 1);
  }

  const [{isDrag}, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient._id,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  // const DragAndDropContainer = () => {
  //   const [elements, setElements] = React.useState([]);
  //   const [draggedElements, setDraggedElements] = React.useState([]);
  //
  //   const handleDrop = (itemId) => {
  //     setElements([
  //       ...elements.filter(element => element.id !== itemId.id)
  //     ]);
  //
  //     setDraggedElements([
  //       ...draggedElements,
  //       ...elements.filter(element => element.id === itemId.id)
  //     ]);
  //   }
  // }


  return (
    !isDrag &&
    <>
      <li
        onClick={handleModalOpen}
        className={`${styles.card}`}
        ref={dragRef}
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
          closeModal={closeModal}
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
