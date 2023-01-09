import React, {FC} from 'react';
import styles from './order-details.module.scss';
import done from '../../images/done.svg';
import {selectOrderNumber} from "../../services/order/order-selectors";
import {useAppSelector} from "../../services/store";

const OrderDetails: FC = () => {
  const number = useAppSelector(selectOrderNumber);

  return (
    <section className={`pt-15 pb-30 pl-25 pr-25 ${styles.modal}`}>
      <h2 className={`text text_type_digits-large mb-8`}>
        {number}
      </h2>
      <p className={`text text_type_main-medium mb-15`}>
        идентификатор заказа
      </p>
      <img className={`mb-15`} src={done} alt='Заказ принят.'/>
      <p className={`text text_type_main-default mb-2`}>
        Ваш заказ начали готовить
      </p>
      <p className={`text text_type_main-default text_color_inactive`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </section>
  );
};

export default OrderDetails;
