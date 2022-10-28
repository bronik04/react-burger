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
import { sendOrder } from '../../utils/burger-api';
import { useDispatch, useSelector } from 'react-redux';
import {getNumberSuccess, getOrderNumber} from "../../services/slices/order-slice";
import {useDrop} from "react-dnd";

const BurgerConstructor = ({ onDropHandler }) => {
  const ingredients = useSelector(
    state => state.constructorReducer.ingredients,
  );

  const { number } = useSelector(state => state.orderReducer);
  const dispatch = useDispatch();

  const [isModalOpened, setIsModalOpened] = useState(false);

  const currentBun = ingredients.find(ingredient => ingredient.type === 'bun');
  const fillings = ingredients.filter(ingredient => ingredient.type !== 'bun');
  const cart = [
    currentBun?._id,
    ...fillings.map(item => item._id),
    currentBun?._id,
  ];

  //todo переработать под асинхрон
  const createOrder = () => {
    // sendOrder(cart)
    //   .then(res => {
    //     if (res.success) {
    //       dispatch(getNumberSuccess(res.order));
    //       handleModalOpen();
    //     }
    //   })
    //   .catch(err => console.log(err));
    dispatch(getOrderNumber());
  };

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(id) {},
  });

  const totalPrice = useMemo(() => {
    return fillings.reduce(
      (acc, ingredient) => acc + ingredient.price,
      currentBun?.price * 2,
    );
  }, [fillings, currentBun]);

  const closeModal = () => {
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
          htmlType={'button'}
          type='primary'
          size='large'
        >
          Оформить заказ
        </Button>
      </div>

      {isModalOpened && (
        <Modal closeModal={closeModal}>
          <OrderDetails number={number} />
        </Modal>
      )}
    </div>
  );
};

export default BurgerConstructor;
