import React from 'react';
import PropTypes from 'prop-types';
import HeaderButtonStyles from './header-button.module.css';

const HeaderButton = ({text, isActive, value, setCurrent, icon: Icon}) => {

  const handleClick = () => {
    setCurrent(value);
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
  text: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  isActive: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default HeaderButton;
