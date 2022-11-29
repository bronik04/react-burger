import React from 'react';
import OrderCard from '../order-card/order-card';
import styles from './order-list.module.scss';

const OrderList = () => {
  return (
    <section className={styles.container}>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </section>
  );
};

export default OrderList;
