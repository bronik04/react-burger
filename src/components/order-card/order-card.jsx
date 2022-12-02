import React from 'react';
import styles from './order-card.module.scss';
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';
import ImageList from './components/image-list';

const OrderCard = props => {
  let status;
  switch (props.status) {
    case 'done':
      status = 'Выполнен';
      break
    case 'pending':
      status = 'Готовится'
      break
    case 'created':
      status = 'Создан'
      break
  }

  const color_success =  props.status === 'done' ? 'text_color_success' : '';

  return (
    <li className={styles.card}>
      <div className={styles.number_wrapper}>
        <p className={`text text_type_digits-default`}>
          {`#${props.number}`}
        </p>
        <FormattedDate
          className={`text text_type_main-default text_color_inactive`}
          date={new Date(props.createdAt)}
        />
      </div>
      <div>
        <p className={`text text_type_main-medium`}>{props.name}</p>
        <p className={`text text_type_main-default ${color_success}`}>
          {status}
        </p>
      </div>
      <div className={styles.price_wrapper}>
        <ImageList ingredientsId={props.ingredients}/>
        <span
          className={`${styles.total_price_wrapper} text text_type_digits-default`}
        >
          480 <CurrencyIcon type={'primary'} />
        </span>
      </div>
    </li>
  );
};

export default OrderCard;
