import React from 'react';
import styles from './feed-detailes.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useIngredientInfo } from '../../hooks/useIngredientInfo';
import TotalPrice from '../total-price/total-price';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useStatus } from '../../hooks/useStatus';
import { useSocket } from '../../hooks/useSocket';
import { selectFeedById } from '../../services/web-socket/ws-selectors';
import {useAppSelector} from "../../services/store";

const FeedDetails = ({ isModal }: { isModal: boolean }) => {
  const { id } = useParams<{ id: string }>();
  const currentFeed = useAppSelector(selectFeedById(id))!;

  //todo
  // if (currentFeed === undefined) {
  //   return;
  // }
  // React Hook "useStatus" is called conditionally.
  // React Hooks must be called in the exact same order in every component render

  const status = useStatus(currentFeed?.status);

  useSocket();

  const ingredientsWithInfo = useIngredientInfo(currentFeed?.ingredients);

  const price = ingredientsWithInfo.reduce(
    (acc, ingredient) => acc + ingredient.price,
    0,
  );
  const color_success =
    currentFeed?.status === 'done' ? 'text_color_success' : '';

  const layout = !isModal && styles.feed__number;

  return (
    currentFeed && (
      <section className={styles.feed}>
        <p className={`text text_type_digits-default mb-5 ${layout}`}>
          #{currentFeed.number}
        </p>
        <div className={`mb-15`}>
          <h1
            className={`text text_type_main-medium mb-3 ${styles.feed__name}`}
          >
            {currentFeed.name}
          </h1>
          <p className={`text text_type_main-default ${color_success}`}>
            {status}
          </p>
        </div>
        <p className={`text text_type_main-medium mb-6`}>Состав:</p>
        <ul className={styles.feed__list}>
          {ingredientsWithInfo.map((ingredient) => (
            <Link
              to={`/ingredients/${ingredient._id}`}
              className={styles.feed__link}
              key={ingredient._id}
            >
              <li className={styles.feed__ingredient}>
                <img
                  className={styles.feed__img}
                  src={ingredient.image_mobile}
                  alt={ingredient.name}
                />
                <p
                  className={`text text_type_main-default ${styles.feed__name}`}
                >
                  {ingredient.name}
                </p>
                <TotalPrice sum={ingredient.price} count={ingredient.count} />
              </li>
            </Link>
          ))}
        </ul>
        <footer className={styles.feed__footer}>
          <FormattedDate
            className={`text text_type_main-default text_color_inactive`}
            date={new Date(currentFeed.createdAt)}
          />
          <TotalPrice sum={price} />
        </footer>
      </section>
    )
  );
};

export default FeedDetails;
