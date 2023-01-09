import React, { useMemo, useState } from 'react';
import styles from './burger-constructor.module.scss';
import {
  Button,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import TotalPrice from '../total-price/total-price';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import {
  clearErrorMessage,
  fetchOrder,
} from '../../services/order/order-slice';
import { useDrop } from 'react-dnd';
import {
  addBun,
  addIngredient,
  clearOrder,
} from '../../services/constructor/constructor-slice';
import ConstructorItem from './components/constuctor-item';
import ErrorMessage from '../error-message/error-message';
import { useHistory } from 'react-router-dom';
import { selectOrderError } from '../../services/order/order-selectors';
import { selectBurger } from '../../services/constructor/constructor-selectors';
import {IIngredient } from '../../types';
import { selectIsAuth } from '../../services/auth/auth-selectors';
import {useAppDispatch, useAppSelector} from '../../services/store';

const BurgerConstructor = () => {
  const { fillings, bun } = useAppSelector(selectBurger);
  const isAuth = useAppSelector(selectIsAuth);
  const error = useAppSelector(selectOrderError);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [isModalOpened, setIsModalOpened] = useState(false);

  const [{ isOver, canDrop }, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(ingredient: IIngredient) {
      dispatch(
        ingredient.type !== 'bun'
          ? addIngredient(ingredient)
          : addBun(ingredient),
      );
    },
    collect: (monitor) => ({
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

  const fillingsId = fillings.map((item) => item._id);
  const bunId = bun?._id;
  const orderId = [bunId, ...fillingsId, bunId];

  const createOrder = () => {
    if (!isAuth) {
      history.replace('/login');
    } else {
      // @ts-ignore
        dispatch(fetchOrder(orderId)).then(() => {
         handleModalOpen();
      });
    }
  };

  const totalPrice = useMemo(() => {
      return fillings.reduce(
      (acc, ingredient) => acc + ingredient.price,
    // @ts-ignore
      bun?.price * 2,
    );
  }, [fillings, bun]);

  const closeModal = () => {
    setIsModalOpened(false);
    dispatch(clearOrder());
  };

  const closeErrModal = () => {
    dispatch(clearErrorMessage());
  };

  const handleModalOpen = () => {
    setIsModalOpened(true);
  };

  return (
    <div className={`${styles.main}`} ref={dropTarget} style={{ border }}>
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
        <TotalPrice sum={totalPrice} isBig={true} />
        <Button
          onClick={createOrder}
          htmlType={'button'}
          type='primary'
          size='large'
          disabled={!bun && true}
        >
          {isAuth ? 'Оформить заказ' : 'Войти'}
        </Button>
      </div>

      {isModalOpened && (
        <Modal closeModal={closeModal}>
          <OrderDetails />
        </Modal>
      )}

      {error && (
        <Modal closeModal={closeErrModal}>
          <ErrorMessage error={error} />
        </Modal>
      )}
    </div>
  );
};

export default BurgerConstructor;
