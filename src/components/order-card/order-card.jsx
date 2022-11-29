import React from 'react';
import styles from './order-card.module.scss';

const OrderCard = () => {
  return (
    <li className={styles.card}>
      <div className={styles.number_wrapper}>
        <p className={`text text_type_digits-default`}>#034535</p>
        <p
          className={`text text_type_main-default text_color_inactive`}
        >
          Сегодня, 16:20 i-GMT+3
        </p>
      </div>
      <div>
        <p className={`text text_type_main-medium`}>
          Death Star Starship Main бургер
        </p>
        <p className={`text text_type_main-default`}>Создан</p>
      </div>
      <div className={styles.price_wrapper}>
        <div>
          Компонент с картинками
        </div>
        <span className={`text text_type_digits-default`}>480</span>
      </div>
    </li>
  );
};

export default OrderCard;
