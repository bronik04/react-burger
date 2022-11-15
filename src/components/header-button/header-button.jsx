import React from 'react';
import PropTypes from 'prop-types';
import styles from './header-button.module.css';
import { Link } from 'react-router-dom';

const HeaderButton = ({
  text,
  to,
  isActive,
  value,
  setCurrent,
  icon: Icon,
}) => {
  const handleClick = () => {
    setCurrent(value);
  };

  return (
    <Link
      to={to}
      className={`${styles.button} text text_type_main-default
        ${isActive ? 'text_color_primary' : 'text_color_inactive'}`}
      onClick={handleClick}
    >
      <Icon type={isActive ? 'primary' : 'secondary'} />
      {text}
    </Link>
  );
};

HeaderButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  isActive: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default HeaderButton;
