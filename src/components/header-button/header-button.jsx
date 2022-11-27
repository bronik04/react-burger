import React from 'react';
import PropTypes from 'prop-types';
import styles from './header-button.module.scss';
import { NavLink, useLocation } from 'react-router-dom';

const HeaderButton = ({ text, to, exact, icon: Icon }) => {
  const { pathname } = useLocation();

  return (
    <NavLink
      to={to}
      exact={exact}
      className={`${styles.link} text text_type_main-default text_color_inactive`}
      activeClassName={styles.link__active}
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
  exact: PropTypes.bool,
};

export default HeaderButton;
