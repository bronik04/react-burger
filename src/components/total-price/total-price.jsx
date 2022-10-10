import React from 'react';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import Styles from './total-price.module.css';
import PropTypes from 'prop-types';

const TotalPrice = ({sum}) => {
  return (
    <div className={`${Styles.icon_big} ${Styles.total_container}`}>
         <span className='text text_type_digits-medium'>
          {sum}
        </span>
      <CurrencyIcon type={'primary'}/>
    </div>
  );
};

TotalPrice.propTypes = {
  sum: PropTypes.number
}

export default TotalPrice;
