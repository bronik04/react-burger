import React from 'react';
import styles from '../profile/profile.module.scss';
import ProfileNav from '../../components/profile-nav/profile-nav';
import OrderList from "../../components/order-list/order-list";

const OrdersPage = () => {
  return (
    <main className={styles.container}>
      <ProfileNav />
      <OrderList/>
    </main>
  );
};

export default OrdersPage;
