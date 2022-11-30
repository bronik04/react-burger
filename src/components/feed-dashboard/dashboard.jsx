import React from 'react';
import styles from './dashboard.module.scss'

const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.status}>
        <div>
          <p className={`text text_type_main-medium mb-6`}>Готовы:</p>
          <ul className={`text text_type_digits-default text_color_success`}>
            <li>034533</li>
            <li>034533</li>
            <li>034533</li>
          </ul>
        </div>
        <div>
          <p className={`text text_type_main-medium mb-6`}>В работе:</p>
          <ul className={`text text_type_digits-default`}>
            <li>034533</li>
            <li>034533</li>
            <li>034533</li>
          </ul>
        </div>
      </div>
      <div>
        <p className={`text text_type_main-medium`}>Выполнено за все время:</p>
        <p className={`text text_type_digits-large`}>28 752</p>
      </div>
      <div>
        <p className={`text text_type_main-medium`}>Выполнено за сегодня:</p>
        <p className={`text text_type_digits-large`}>138</p>
      </div>
    </section>
  );
};

export default Dashboard;
