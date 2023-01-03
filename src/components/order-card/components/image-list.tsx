import React from 'react';
import styles from './image-list.module.scss';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { IIngredientsWithCount} from "../../../types";

// todo Почему-то не стыкуется?
const ImageList = ({ ingredientsWithInfo }: any) => {
  return (
    <ul className={styles.list}>
      {ingredientsWithInfo.slice(0, 6).map((obj: IIngredientsWithCount, index: number) =>
        index < 5 ? (
          <li
            key={obj._id}
            style={{ zIndex: 6 - index }}
            className={styles.list__item}
          >
            {obj.count > 1 && (
              <Counter
                extraClass={styles.list__counter}
                count={obj.count}
                size={'small'}
              />
            )}

            <img
              className={styles.list__img}
              src={obj.image_mobile}
              alt={obj.name}
            />
          </li>
        ) : (
          <li key={obj._id} className={styles.list__item}>
            <img
              className={styles.list__end}
              src={obj.image_mobile}
              alt={obj.name}
            />
            {ingredientsWithInfo.length > 6 && (
              <span
                className={`text text_type_digits-default ${styles.list__overlay_text}`}
              >
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
