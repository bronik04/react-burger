import React from 'react';
import styles from './image-list.module.scss';
import img from '../../../images/ingredient.png';

const ImageList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <img
          src={img}
          alt='test'
        />
      </li>{' '}
      <li className={styles.list__item}>
        <img
          src={img}
          alt='test'
        />
      </li>{' '}
      <li className={styles.list__item}>
        <img
          src={img}
          alt='test'
        />
      </li>{' '}
      <li className={styles.list__item}>
        <img
          src={img}
          alt='test'
        />
      </li>{' '}
      <li className={styles.list__item}>
        <img
          src={img}
          alt='test'
        />
      </li>
    </ul>
  );
};

export default ImageList;
