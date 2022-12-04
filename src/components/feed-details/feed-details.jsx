import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './feed-detailes.module.scss';
import { useIngredientInfo } from '../../hooks/useIngredientInfo';
import TotalPrice from "../total-price/total-price";

const FeedDetails = () => {
  const { id } = useParams();
  const feeds = useSelector(state => state.webSocket.feeds);

  const currentFeed = feeds.find(ingredient => ingredient._id === id);

  const ingredientWithInfo = useIngredientInfo(
    currentFeed.ingredients,
  );
  return (
    currentFeed && (
      <section className={styles.feed}>
        <p className={`text text_type_digits-default mb-5`}>
          #{currentFeed.number}
        </p>
        <div className={`mb-15`}>
        <h1 className={`text text_type_main-medium`}>
          {currentFeed.name}
        </h1>
        </div>
        <p className={`text text_type_main-medium mb-6`}>Состав:</p>
        <ul className={styles.feed__list}>
          {ingredientWithInfo.map(ingredient => (
            <li className={styles.feed__ingredient}>
              <img
                className={styles.feed__img}
                src={ingredient.image_mobile}
                alt={ingredient.name}
              />
              <p className={`text text_type_main-default ${styles.feed__name}`}>
                {ingredient.name}
              </p>
              <TotalPrice/>
            </li>
          ))}
        </ul>
      </section>
    )
  );
};

export default FeedDetails;
