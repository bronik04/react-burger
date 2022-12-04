import React from 'react';
import styles from './order-card.module.scss';
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';
import ImageList from './components/image-list';
import { Link, useLocation } from 'react-router-dom';
import {useIngredientInfo} from "../../hooks/useIngredientInfo";

const OrderCard = props => {
  const { _id, name, number, status, ingredients: ingredientsId, createdAt } = props;
  const location = useLocation();
  const ingredientsWithInfo = useIngredientInfo(ingredientsId);

  const price = ingredientsWithInfo.reduce(
    (acc, ingredient) =>
      acc + ingredient.price,
    0,
  );

  let ruStatus;
  switch (status) {
    case 'done':
      ruStatus = 'Выполнен';
      break;
    case 'pending':
      ruStatus = 'Готовится';
      break;
    case 'created':
      ruStatus = 'Создан';
      break;
  }

  const color_success =
    props.status === 'done' ? 'text_color_success' : '';

  return (
    <li className={styles.card}>
      <Link
        className={styles.link}
        to={{
          pathname: `/feed/${_id}`,
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
          <p className={`text text_type_main-medium`}>{name}</p>
          <p
            className={`text text_type_main-default ${color_success}`}
          >
            {ruStatus}
          </p>
        </div>
        <div className={styles.price_wrapper}>
          <ImageList ingredientsWithInfo={ingredientsWithInfo} />
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
