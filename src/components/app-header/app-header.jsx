import React from 'react';
import styles from './app-header.module.scss';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderButton from '../header-button/header-button';
import { Link } from 'react-router-dom';

const AppHeader = () => {

  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={styles.header__nav}>
        <ul className={`${styles.menu__list}`}>
          <li>
            <HeaderButton
              icon={BurgerIcon}
              exact={true}
              text={'Конструктор'}
              to={'/'}
            />
          </li>
          <li>
            <HeaderButton
              icon={ListIcon}
              text={'Лента заказов'}
              to={'/feed'}
            />
          </li>
        </ul>
        <Link
          className={styles.logo}
          to={'/'}
        >
          <Logo></Logo>
        </Link>
        <div className={styles.user}>
          <HeaderButton
            icon={ProfileIcon}
            text={'Личный кабинет'}
            to={'/profile'}
          />
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
