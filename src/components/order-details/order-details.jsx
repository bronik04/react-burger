import React from 'react';
import styles from './order-details.module.css';
import done from '../../images/done.svg';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const OrderDetails = ({close}) => {
  return (
    <section className={`pt-30 pb-30 pl-25 pr-25 ${styles.modal}`}>
      <button onClick={close} className={styles.close}><CloseIcon type={"primary"}/></button>
      <h2 className={`text text_type_digits-large mb-8`}>034536</h2>
      <p className={`text text_type_main-medium mb-15`}>идентификатор заказа</p>
      <img className={`mb-15`} src={done} alt="Done"/>
      <p className={`text text_type_main-default mb-2`}>Ваш заказ начали готовить</p>
      <p className={`text text_type_main-default text_color_inactive`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </section>
  );
};

export default OrderDetails;
