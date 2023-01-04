import React, {FC} from 'react';
import styles from './dashboard.module.scss';
import { useSelector } from 'react-redux';
import { selectWebSocket } from '../../services/web-socket/ws-selectors';

const Dashboard: FC = () => {
  const { total, totalToday, orders } = useSelector(selectWebSocket);

  const doneOrders = orders?.filter((order) => order.status === 'done');
  const pendingOrders = orders.filter((order) => order.status === 'pending');

  return (
    <section className={styles.dashboard}>
      <div className={styles.status}>
        <div>
          <p className={`text text_type_main-medium mb-6`}>Готовы:</p>
          <ul className={`text text_type_digits-default text_color_success`}>
            {doneOrders.slice(0, 20).map((obj) => (
              <li key={obj._id}>#{obj.number}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className={`text text_type_main-medium mb-6`}>В работе:</p>
          <ul className={`text text_type_digits-default`}>
            {pendingOrders.length > 0 ? (
              pendingOrders.map((obj) => <li key={obj._id}>{obj.number}</li>)
            ) : (
              <p className={`text text_type_main-medium`}>
                Нет активных заказов
              </p>
            )}
          </ul>
        </div>
      </div>
      <div>
        <p className={`text text_type_main-medium`}>Выполнено за все время:</p>
        <p className={`text text_type_digits-large ${styles.dashboard__text}`}>
          {total}
        </p>
      </div>
      <div>
        <p className={`text text_type_main-medium`}>Выполнено за сегодня:</p>
        <p className={`text text_type_digits-large ${styles.dashboard__text}`}>
          {totalToday}
        </p>
      </div>
    </section>
  );
};

export default Dashboard;
