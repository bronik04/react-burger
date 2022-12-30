import React, {FC} from 'react';
import OrderList from "../../components/order-list/order-list";
import styles from './feed.module.scss';
import Dashboard from "../../components/feed-dashboard/dashboard";
import {useSocket} from "../../hooks/useSocket";

const FeedPage: FC = () => {
  useSocket();
  return (
    <main className={styles.feed__container}>
      <OrderList/>
      <Dashboard/>
    </main>
  );
};

export default FeedPage;
