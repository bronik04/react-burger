import React from 'react';
import OrderCard from '../order-card/order-card';
import styles from './order-list.module.scss';

const OrderList = () => {
  return (
    <ul className={styles.container}>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </ul>
  );
};

export default OrderList;
