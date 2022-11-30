import React from 'react';
import OrderList from "../../components/order-list/order-list";
import styles from './feed.module.scss';
import Dashboard from "../../components/feed-dashboard/dashboard";

const FeedPage = () => {
  return (
    <main className={styles.feed__container}>
      <OrderList/>
      <Dashboard/>
    </main>
  );
};

export default FeedPage;
