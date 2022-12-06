import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './feed-detailes.module.scss';
import { useIngredientInfo } from '../../hooks/useIngredientInfo';
import TotalPrice from '../total-price/total-price';
import { nanoid } from '@reduxjs/toolkit';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useStatus } from '../../hooks/useStatus';

const FeedDetails = () => {
  const { id } = useParams();
  const feeds = useSelector(state => state.webSocket.feeds);
  const currentFeed = feeds.find(ingredient => ingredient._id === id);
  const status = useStatus(currentFeed.status);
  const ingredientsWithInfo = useIngredientInfo(
    currentFeed.ingredients,
  );
  const price = ingredientsWithInfo.reduce(
    (acc, ingredient) => acc + ingredient.price,
    0,
  );


  const color_success =
    currentFeed.status === 'done' ? 'text_color_success' : '';

  return (
    feeds.length > 0 && (
      <section className={styles.feed}>
        <p className={`text text_type_digits-default mb-5`}>
          #{currentFeed.number}
        </p>
        <div className={`mb-15`}>
          <h1 className={`text text_type_main-medium mb-3`}>
            {currentFeed.name}
          </h1>
          <p
            className={`text text_type_main-default ${color_success}`}
          >
            {status}
          </p>
        </div>
        <p className={`text text_type_main-medium mb-6`}>Состав:</p>
        <ul className={styles.feed__list}>
          {ingredientsWithInfo.map(ingredient => (
            <li
              key={nanoid()}
              className={styles.feed__ingredient}
            >
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
              <TotalPrice
                sum={ingredient.price}
                count={ingredient.count}
              />
            </li>
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
