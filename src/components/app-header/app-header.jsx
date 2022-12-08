import React from 'react';
import styles from './app-header.module.scss';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderButton from '../header-button/header-button';
import { Link, useLocation } from 'react-router-dom';

const AppHeader = () => {
  const { pathname } = useLocation();
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={styles.header__nav}>
        <ul className={`${styles.menu}`}>
          <li className={styles.menu__item}>
            <BurgerIcon
              type={
                pathname.startsWith('/') && pathname.length < 2
                  ? 'primary'
                  : 'secondary'
              }
            />
            <HeaderButton
              icon={BurgerIcon}
              exact={true}
              text={'Конструктор'}
              to={'/'}
            />
          </li>
          <li className={styles.menu__item}>
            <ListIcon
              type={
                pathname.startsWith('/feed') ? 'primary' : 'secondary'
              }
            />
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
          <ProfileIcon
            type={
              pathname.startsWith('/profile')
                ? 'primary'
                : 'secondary'
            }
          />
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
