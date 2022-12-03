import React from 'react';
import styles from './order-card.module.scss';
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';
import ImageList from './components/image-list';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OrderCard = props => {
  const location = useLocation();
  const { ingredients } = useSelector(
    state => state.ingredientReducer,
  );
  const arr = ingredients.filter(({ _id }) =>
    props.ingredients.includes(_id),
  );


  const price = arr.reduce(
    (acc, ingredient) =>
      acc + ingredient.price,
    0,
  );

  const { _id, number, createdAt } = props;

  let status;
  switch (props.status) {
    case 'done':
      status = 'Выполнен';
      break;
    case 'pending':
      status = 'Готовится';
      break;
    case 'created':
      status = 'Создан';
      break;
  }

  const color_success =
    props.status === 'done' ? 'text_color_success' : '';

  return (
    <li className={styles.card}>
      <Link
        className={styles.link}
        to={{
          pathname: `/feed/`,
          state: { background: location },
        }}
      >
        <div className={styles.number_wrapper}>
          <p className={`text text_type_digits-default`}>
            {`#${number}`}
          </p>
          <FormattedDate
            className={`text text_type_main-default text_color_inactive`}
            date={new Date(createdAt)}
          />
        </div>
        <div>
          <p className={`text text_type_main-medium`}>{props.name}</p>
          <p
            className={`text text_type_main-default ${color_success}`}
          >
            {status}
          </p>
        </div>
        <div className={styles.price_wrapper}>
          <ImageList ingredientsId={props.ingredients} />
          <span
            className={`${styles.total_price_wrapper} text text_type_digits-default`}
          >
            {price} <CurrencyIcon type={'primary'} />
          </span>
        </div>
      </Link>
    </li>
  );
};

export default OrderCard;
