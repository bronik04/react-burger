import React, {useState} from 'react';
import PropTypes from "prop-types";
import '../../utils/data';
import styles from './product-card.module.css';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const IngredientCard = ({ingredient}) => {

  const [isModalOpened, setIsModalOpened] = useState(false);

  const closeAllModals = (evt) => {
    setIsModalOpened(false);
    console.log(evt.currentTarget);
  }

  const handleEscKeydown = (evt) => {
    evt.key === "Escape" && closeAllModals();
    console.log(evt.currentTarget);
  };

  const handleModalOpen = (evt) => {
    setIsModalOpened(true);
    console.log(evt.currentTarget);
  }

  const [count, setCount] = useState(0);

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
          {ingredient.price && <CurrencyIcon type={"primary"}/>}
        </p>
        <p className={`text text_type_main-default ${styles.name}`}>
          {ingredient.name}
        </p>
      </li>
      {
        isModalOpened &&
        <Modal
          onOverlayClick={closeAllModals}
          onEscKeydown={handleEscKeydown}
        >
          <IngredientDetails
            close={closeAllModals}
            ingredient={ingredient}
          />
        </Modal>
      }
    </>
  );
};

IngredientCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number
}

export default IngredientCard;
