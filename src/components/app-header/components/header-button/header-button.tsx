import React, {FC} from 'react';
import styles from './header-button.module.scss';
import {NavLink } from 'react-router-dom';

type THeaderButton = {
    text: string,
    to: string,
    exact?: boolean
}

const HeaderButton: FC<THeaderButton> = ({ text, to, exact }) => {
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

export default HeaderButton;
