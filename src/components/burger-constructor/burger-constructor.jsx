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
import {
  getNumberSuccess,
  getOrderNumber,
} from '../../services/slices/order-slice';
import { useDrop } from 'react-dnd';
import {
  addIngredient,
  deleteIngredient, increaseCount,
} from '../../services/slices/constructor-slice';

const BurgerConstructor = () => {
  const { fillings, bun } = useSelector(state => state.constructorReducer);

  const dispatch = useDispatch();

  const [isModalOpened, setIsModalOpened] = useState(false);

  const [{ isOver, canDrop }, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(ingredient) {
      dispatch(addIngredient(ingredient));
      dispatch(increaseCount(ingredient._id));
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  // todo переделать
  const isActive = canDrop && isOver;
  let opacity = 1;
  let border = 'transparent';
  if (isActive) {
    opacity = 0.7;
    border = '2px dashed #4c4cff';
  } else if (canDrop) {
    opacity = 0.5;
    border = '2px dashed #4c4cff';
  }

  //const currentBun = ingredients.find(ingredient => ingredient.type === 'bun');
  //const fillings = ingredients.filter(ingredient => ingredient.type !== 'bun');
  // const cart = [
  //   currentBun?._id,
  //   ...fillings.map(item => item._id),
  //   currentBun?._id,
  // ];

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
    //dispatch(getOrderNumber());
  };

  const totalPrice = useMemo(() => {
    return fillings.reduce(
      (acc, ingredient) => acc + ingredient.price,
      bun?.price * 2,
    );
  }, [fillings, bun]);

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const handleModalOpen = () => {
    setIsModalOpened(true);
  };

  return (
    <div
      className={`${styles.main}`}
      ref={dropTarget}
      style={{ opacity, border }}
    >
      <div className={`mt-25 mb-10 ${styles.container}`}>
        {bun && (
          <ConstructorElement
            extraClass={`ml-8`}
            type={'top'}
            isLocked={true}
            text={`${bun.name} (верх)`}
            thumbnail={bun.image}
            price={bun.price}
          />
        )}

        <ul className={`${styles.list}`}>
          {fillings.map(filling => {
            return (
              <li
                key={filling.uid}
                className={styles.list__item}
              >
                <DragIcon type={'primary'} />
                <ConstructorElement
                  isLocked={false}
                  text={filling.name}
                  thumbnail={filling.image}
                  price={filling.price}
                  handleClose={() => dispatch(deleteIngredient(filling))}
                />
              </li>
            );
          })}
        </ul>

        {bun && (
          <ConstructorElement
            extraClass={`ml-8`}
            type={'bottom'}
            isLocked={true}
            text={`${bun.name} (низ)`}
            thumbnail={bun.image}
            price={bun.price}
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
          {/*<OrderDetails number={number} />*/}
        </Modal>
      )}
    </div>
  );
};

export default BurgerConstructor;
