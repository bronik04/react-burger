import React, {useState} from 'react';
import styles from './burger-constructor.module.css';
import {Button, ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import TotalPrice from '../total-price/total-price';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import {ingredientPropType} from '../../utils/prop-types';
import PropTypes from 'prop-types';

const BurgerConstructor = ({ingredients}) => {

  const [isModalOpened, setIsModalOpened] = useState(false);

  const currentBun = ingredients.find(ingredient => ingredient._id === '60d3b41abdacab0026a733c6');
  const priceSum = ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);

  const closeAllModals = () => {
    setIsModalOpened(false);
  }

  const handleEscKeydown = (evt) => {
    evt.key === 'Escape' && closeAllModals();
  };

  const handleModalOpen = () => {
    setIsModalOpened(true);
  }

  return (
    <div className={`${styles.main}`}>
      <div className={`mt-25 mb-10 ${styles.container}`}>

        {
          currentBun &&
          <ConstructorElement
            extraClass={`ml-8`}
            type={'top'}
            isLocked={true}
            text={`${currentBun.name} (верх)`}
            thumbnail={currentBun.image}
            price={currentBun.price}
          />
        }

        <ul className={`${styles.list}`}>
          {
            ingredients.map(ingredient => {
              return ((ingredient.type === 'main' || ingredient.type === 'sauce') &&
                <li key={ingredient._id} className={styles.list__item}>
                  <DragIcon type={'primary'}/>
                  <ConstructorElement
                    isLocked={false}
                    text={ingredient.name}
                    thumbnail={ingredient.image}
                    price={ingredient.price}/>
                </li>
              )
            })
          }
        </ul>

        {
          currentBun &&
          <ConstructorElement
            extraClass={`ml-8`}
            type={'bottom'}
            isLocked={true}
            text={`${currentBun.name} (низ)`}
            thumbnail={currentBun.image}
            price={currentBun.price}
          />
        }

      </div>
      <div className={styles.order}>

        <TotalPrice sum={priceSum}/>
        <Button
          onClick={handleModalOpen}
          htmlType={'button'}
          type='primary'
          size='large'>
          Оформить заказ
        </Button>
      </div>

      {
        isModalOpened &&
        <Modal
          onOverlayClick={closeAllModals}
          onEscKeydown={handleEscKeydown}
        >
          <OrderDetails
            closeModal={closeAllModals}
          />
        </Modal>
      }

    </div>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
}

export default BurgerConstructor;
