import React from 'react';
import styles from '../basic-form-styles.module.scss';
import profileStyles from '../profile/profile.module.scss';
import { NavLink } from 'react-router-dom';

const Orders = () => {

  return (
    <div className={styles.container}>
      <nav className={profileStyles.navigation}>
        <NavLink
          exact
          to={'/profile'}
          className={`text text_type_main-medium text_color_inactive`}
          activeClassName={profileStyles.active}
        >
          Профиль
        </NavLink>
        <NavLink
          exact
          to={'/orders'}
          className={`text text_type_main-medium text_color_inactive`}
          activeClassName={profileStyles.active}
        >
          История заказов
        </NavLink>
        <NavLink
          to={'/login'}
          className={`text text_type_main-medium text_color_inactive mb-20`}
          activeClassName={profileStyles.active}
        >
          Выход
        </NavLink>
        <p className={'text text_type_main-default text_color_inactive'}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <div><h1>История заказов</h1></div>
    </div>
  );
};

export default Orders;
