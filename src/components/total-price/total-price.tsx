import React, {FC} from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './total-price.module.scss';

type TTotalPrice = {
    sum: number,
    isBig: boolean,
    count: number,
}

const TotalPrice: FC<TTotalPrice> = ({ sum, isBig, count }) => {
  return (
    <div
      className={`${isBig ? styles.icon_big : ''} ${
        styles.total_container
      }`}
    >
      {count && (
        <>
          <span className={`text text_type_digits-default`}>
            {count}
          </span>
          <span className={`text text_type_digits-default`}>x</span>
        </>
      )}
      <span
        className={
          isBig
            ? 'text text_type_digits-medium'
            : 'text text_type_digits-default'
        }
      >
        {isNaN(sum) ? 0 : sum}
      </span>
      <CurrencyIcon type={'primary'} />
    </div>
  );
};

export default TotalPrice;
