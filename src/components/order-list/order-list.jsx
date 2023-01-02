import React from 'react';
import OrderCard from '../order-card/order-card';
import styles from './order-list.module.scss';
import {useSelector} from "react-redux";

const OrderList = () => {
  const feeds = useSelector(state => state.webSocket.orders);
  return (
    <ul className={styles.container}>
      {
        feeds.map(feed => <OrderCard key={feed._id} {...feed} />)
      }
    </ul>
  );
};

export default OrderList;
