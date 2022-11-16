import React from 'react';
import PropTypes from 'prop-types';
import styles from './header-button.module.scss';
import {NavLink, useHistory} from 'react-router-dom';

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

  const history = useHistory();
  console.log(history.location.pathname);

  return (
    <NavLink
      to={to}
      className={`${styles.link} text text_type_main-default text_color_inactive`}
      activeClassName={styles.link__active}
      onClick={handleClick}
    >
      <Icon type={history.location.pathname === to ? 'primary' : 'secondary'} />
      {text}
    </NavLink>
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
