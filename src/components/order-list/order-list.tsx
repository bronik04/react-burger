import React, {FC} from 'react';
import OrderCard from '../order-card/order-card';
import styles from './order-list.module.scss';
import {selectOrders} from "../../services/web-socket/ws-selectors";
import {useAppSelector} from "../../services/store";

const OrderList: FC = () => {
  const orders = useAppSelector(selectOrders);
  return (
    <ul className={styles.container}>
      {
        orders.map(order => <OrderCard key={order._id} {...order} />)
      }
    </ul>
  );
};

export default OrderList;
