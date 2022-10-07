import React from 'react';
import PropTypes from "prop-types";
import HeaderButtonStyles from './header-button.module.css';
import { TIconProps } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils';

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

HeaderButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.any
}

export default HeaderButton;
