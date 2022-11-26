import React from 'react';
import styles from '../basic-form-styles.module.scss';
import profileStyles from '../profile/profile.module.scss';
import { NavLink } from 'react-router-dom';
import ProfileNav from "../../components/profile-nav/profile-nav";

const OrdersPage = () => {

  return (
    <div className={styles.container}>
      <ProfileNav/>
      <div><h1>История заказов</h1></div>
    </div>
  );
};

export default OrdersPage;
