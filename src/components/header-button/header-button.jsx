import React from 'react';
import {BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderButtonStyles from './header-button.module.css'

const HeaderButton = ({text, icon}) => {
  return (
    <div>
      <a className={`${HeaderButtonStyles.button} text text_type_main-default`}
         href="#">
        {icon}
        {text}
      </a>
    </div>
  );
};

export default HeaderButton;
