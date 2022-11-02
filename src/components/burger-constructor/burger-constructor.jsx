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
import { useDispatch, useSelector } from 'react-redux';
import { getOrderNumber } from '../../services/slices/order-slice';
import { useDrop } from 'react-dnd';
import {
  addIngredient,
  deleteIngredient,
  increaseCount,
} from '../../services/slices/constructor-slice';
import ConstructorItem from './components/constuctor-item';

const BurgerConstructor = () => {
  const { fillings, bun } = useSelector(state => state.constructorReducer);
  const dispatch = useDispatch();
  const number = useSelector(state => state.orderReducer.number);

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

  const orderId = fillings.map(item => item._id);
  const bunId = bun?._id;
  const orderArr = [bunId, ...orderId];

  console.log(bunId);

  const createOrder = () => {
    dispatch(getOrderNumber(orderArr))
      .then(() => {
        handleModalOpen();
      })
      .catch(err => console.log(err));
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
          {fillings.map(filling => (
            <ConstructorItem
              key={filling.uid}
              filling={filling}
            />
          ))}
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
          <OrderDetails number={number} />
        </Modal>
      )}
    </div>
  );
};

export default BurgerConstructor;
