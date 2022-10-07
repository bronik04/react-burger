import React, {useState} from 'react';
import PropTypes from "prop-types";
import '../../utils/data';
import styles from './product-card.module.css';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const IngredientCard = ({ingredient, count}) => {

  const [isModalOpened, setIsModalOpened] = useState(false);

  const closeAllModals = () => {
    setIsModalOpened(false);
  }

  const handleEscKeydown = (event) => {
    event.key === "Escape" && closeAllModals();
  };

  const handleModalOpen = () => {
    setIsModalOpened(true);
  }

  return (
      <li
        onClick={handleModalOpen}
        className={`${styles.card}`}
      >
        {count && <Counter count={count}/>}
        <img className={`pl-4 pr-4 ${styles.img}`}
             src={ingredient.image}
             alt={ingredient.name}/>
        <p className={`mt-1 mb-1 text ${styles.price}`}>
          {ingredient.price}
          {ingredient.price && <CurrencyIcon type={"primary"}/>}
        </p>
        <p className={`text text_type_main-default ${styles.name}`}>
          {ingredient.name}
        </p>

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
      </li>
  );
};

IngredientCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number
}

export default IngredientCard;
