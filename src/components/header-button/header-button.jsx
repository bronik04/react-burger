import React from 'react';
import {BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderButtonStyles from './header-button.module.css'

const HeaderButton = ({text}) => {
  return (
    <div>
      <a className={`${HeaderButtonStyles.button} text text_type_main-default`}
         href="#">
        <BurgerIcon type={"primary"}/>
        {text}
      </a>
    </div>
  );
};

export default HeaderButton;
