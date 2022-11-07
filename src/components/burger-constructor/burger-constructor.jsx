import React, { useMemo, useState } from 'react';
import styles from './burger-constructor.module.css';
import {
  Button,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import TotalPrice from '../total-price/total-price';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderNumber } from '../../services/slices/order-slice';
import { useDrop } from 'react-dnd';
import {
  addIngredient,
  clearOrder,
} from '../../services/slices/constructor-slice';
import ConstructorItem from './components/constuctor-item';

const BurgerConstructor = () => {
  const { fillings, bun } = useSelector(state => state.constructorReducer);
  const dispatch = useDispatch();

  const [isModalOpened, setIsModalOpened] = useState(false);

  const [{ isOver, canDrop }, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(ingredient) {
      dispatch(addIngredient(ingredient));
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  let border = 'transparent';
  if (canDrop && isOver) {
    border = '2px dashed green';
  } else if (canDrop) {
    border = '2px dashed #4c4cff';
  }

  const fillingsId = fillings.map(item => item._id);
  const bunId = bun?._id;
  const orderId = [bunId, ...fillingsId, bunId];

  const createOrder = () => {
    dispatch(getOrderNumber(orderId))
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
    dispatch(clearOrder());
  };

  const handleModalOpen = () => {
    setIsModalOpened(true);
  };

  return (
    <div
      className={`${styles.main}`}
      ref={dropTarget}
      style={{ border }}
    >
      {fillings.length === 0 && bun === null && (
        <h2 className={styles.message}>Добавьте ингредиент +</h2>
      )}
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
          {fillings.map((filling, index) => (
            <ConstructorItem
              key={filling.uid}
              filling={filling}
              index={index}
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
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

export default BurgerConstructor;
