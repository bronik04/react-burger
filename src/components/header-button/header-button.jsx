import React from 'react';
import PropTypes from 'prop-types';
import styles from './header-button.module.scss';
import {NavLink } from 'react-router-dom';

const HeaderButton = ({ text, to, exact }) => {
  return (
    <NavLink
      to={to}
      exact={exact}
      className={`${styles.link} text text_type_main-default text_color_inactive`}
      activeClassName={styles.link__active}
    >
      {text}
    </NavLink>
  );
};

HeaderButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

export default HeaderButton;
