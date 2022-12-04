import React from 'react';
import styles from './image-list.module.scss';
import img from '../../../images/ingredient.png';
import { nanoid } from '@reduxjs/toolkit';

const ImageList = ({ ingredientsWithInfo }) => {

  return (
    <ul className={styles.list}>
      {ingredientsWithInfo.slice(0, 6).map((obj, index) =>
        index < 5 ? (
          <li
            key={nanoid()}
            style={{ zIndex: 6 - index }}
            className={styles.list__item}
          >
            <img
              className={styles.list__img}
              src={obj.image_mobile}
              alt={obj.name}
            />
          </li>
        ) : (
          <li
            key={nanoid()}
            className={styles.list__item}
          >
            <img
              className={styles.list__end}
              src={obj.image_mobile}
              alt={obj.name}
            />
            {ingredientsWithInfo.length > 6 && (
              <span className={`text text_type_digits-default ${styles.list__overlay_text}`}>
                +{ingredientsWithInfo.length - 6}
              </span>
            )}
          </li>
        ),
      )}
    </ul>
  );
};

export default ImageList;
