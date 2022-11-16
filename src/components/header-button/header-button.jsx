import React from 'react';
import PropTypes from 'prop-types';
import styles from './header-button.module.scss';
import {NavLink, useLocation} from 'react-router-dom';

const HeaderButton = ({
  text,
  to,
  value,
  setCurrent,
  icon: Icon,
}) => {

  const handleClick = () => {
    setCurrent(value);
  };

  const { pathname } = useLocation();
  console.log('location: ', pathname);

  return (
    <NavLink
      to={to}
      className={`${styles.link} text text_type_main-default text_color_inactive`}
      activeClassName={styles.link__active}
      onClick={handleClick}
    >
      <Icon type={pathname === to ? 'primary' : 'secondary'} />
      {text}
    </NavLink>
  );
};

HeaderButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  value: PropTypes.string.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default HeaderButton;
