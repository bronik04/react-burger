import React from 'react';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './total-price.module.css';
import PropTypes from 'prop-types';

const TotalPrice = ({sum}) => {
  return (
    <div className={`${styles.icon_big} ${styles.total_container}`}>
         <span className='text text_type_digits-medium'>
          {isNaN(sum) ? 0 : sum}
        </span>
      <CurrencyIcon type={'primary'}/>
    </div>
  );
};

TotalPrice.propTypes = {
  sum: PropTypes.number
}

export default TotalPrice;
