import React from 'react';
import PropTypes from 'prop-types';
import HeaderButtonStyles from './header-button.module.css';

const HeaderButton = ({text, isActive, value, onClick, icon: Icon}) => {

  const handleClick = () => {
    onClick(value);
  }

  return (
    <div>
      <a className={`${HeaderButtonStyles.button} text text_type_main-default
        ${isActive ? 'text_color_primary' : 'text_color_inactive'}`}
         href='#'
         onClick={handleClick}
      >
        <Icon type={isActive ? 'primary' : 'secondary'}/>
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
