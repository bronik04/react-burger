import React, { useContext, useMemo, useState } from 'react';
import styles from './burger-constructor.module.css';
import {
  Button,
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import TotalPrice from '../total-price/total-price';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { IngredientContext } from '../../services/context/ingredient-context';
import { sendOrder } from '../../utils/burger-api';

const BurgerConstructor = () => {
  const { ingredients, setIngredients } = useContext(IngredientContext);
  const [orderNumber, setOrderNumber] = useState();
  const [isModalOpened, setIsModalOpened] = useState(false);

  const fillings = ingredients.filter(ingredient => ingredient.type !== 'bun');

  // const reset = () => {
  //   setIngredients([]);
  // }

  // const removeIngredient = (id) => {
  //   setIngredients(ingredients.filter(item => item._id !== id));
  // }

  const cart = ingredients.map(ingredient => ingredient._id);

  const createOrder = () => {
    sendOrder(cart)
      .then(res => {
        if (res.success) {
          setOrderNumber(res.order.number);
          handleModalOpen();
        }
      })
      .catch(err => console.log(err));
  };

  const currentBun = ingredients.find(ingredient => ingredient.type === 'bun');

  // вроде работает
  const totalPrice = useMemo(
    () => {
      return ingredients
        .filter(ingredient => ingredient.type !== 'bun')
        .reduce(
          (acc, ingredient) => acc + ingredient.price,
          currentBun?.price * 2,
        )},
    [ingredients],
  );


  const closeAllModals = () => {
    setIsModalOpened(false);
  };

  const handleModalOpen = () => {
    setIsModalOpened(true);
  };

  return (
    <div className={`${styles.main}`}>
      <div className={`mt-25 mb-10 ${styles.container}`}>
        {currentBun && (
          <ConstructorElement
            extraClass={`ml-8`}
            type={'top'}
            isLocked={true}
            text={`${currentBun.name} (верх)`}
            thumbnail={currentBun.image}
            price={currentBun.price}
          />
        )}

        <ul className={`${styles.list}`}>
          {fillings.map(filling => {
            return (
              <li
                key={filling._id}
                className={styles.list__item}
              >
                <DragIcon type={'primary'} />
                <ConstructorElement
                  isLocked={false}
                  text={filling.name}
                  thumbnail={filling.image}
                  price={filling.price}
                  // handleClose={() => removeIngredient(filling._id)}
                />
              </li>
            );
          })}
        </ul>

        {currentBun && (
          <ConstructorElement
            extraClass={`ml-8`}
            type={'bottom'}
            isLocked={true}
            text={`${currentBun.name} (низ)`}
            thumbnail={currentBun.image}
            price={currentBun.price}
          />
        )}
      </div>
      <div className={styles.order}>
        <TotalPrice sum={totalPrice} />
        <Button
          onClick={createOrder}
          //onClick={reset}
          htmlType={'button'}
          type='primary'
          size='large'
        >
          Оформить заказ
        </Button>
      </div>

      {isModalOpened && (
        <Modal closeAllModals={closeAllModals}>
          <OrderDetails number={orderNumber} />
        </Modal>
      )}
    </div>
  );
};

export default BurgerConstructor;
