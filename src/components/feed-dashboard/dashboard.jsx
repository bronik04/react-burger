import React from 'react';
import styles from './dashboard.module.scss';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const Dashboard = () => {
  const { total, totalToday, feeds } = useSelector(
    state => state.webSocket,
  );

  const pendingOrders = feeds.filter(
    order => order.type === 'pending',
  );

  return (
    <section className={styles.dashboard}>
      <div className={styles.status}>
        <div>
          <p className={`text text_type_main-medium mb-6`}>Готовы:</p>
          <ul
            className={`text text_type_digits-default text_color_success`}
          >
            {feeds.slice(0, 5).map(obj => (
              <li key={nanoid()}>#{obj.number}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className={`text text_type_main-medium mb-6`}>
            В работе:
          </p>
          <ul className={`text text_type_digits-default`}>
            {pendingOrders.length > 0 ? (
              pendingOrders.map(obj => <li>{obj.number}</li>)
            ) : (
              <p className={`text text_type_main-medium`}>Нет активных заказов</p>
            )}
          </ul>
        </div>
      </div>
      <div>
        <p className={`text text_type_main-medium`}>
          Выполнено за все время:
        </p>
        <p className={`text text_type_digits-large`}>{total}</p>
      </div>
      <div>
        <p className={`text text_type_main-medium`}>
          Выполнено за сегодня:
        </p>
        <p className={`text text_type_digits-large`}>{totalToday}</p>
      </div>
    </section>
  );
};

export default Dashboard;
