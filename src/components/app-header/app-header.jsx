import React from 'react';
import styles from './app-header.module.css';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderButton from '../header-button/header-button';

const AppHeader = () => {
  return (
      <header className={`${styles.header} pt-4 pb-4`}>
        <nav className={styles.header__nav}>
          <ul className={`${styles.menu__list}`}>
            <li>
              <HeaderButton
                icon={<BurgerIcon type={'primary'}/>}
                text={'Конструктор'}
                >
              </HeaderButton>
            </li>
            <li>
              <HeaderButton
                icon={<ListIcon type={'primary'}/>}
                text={'Лента заказов'}>
              </HeaderButton>
            </li>
          </ul>
          <a href='#'>
            <Logo></Logo>
          </a>
          <HeaderButton
            icon={<ProfileIcon type={'primary'}/>}
            text={'Личный кабинет'}>
          </HeaderButton>
        </nav>
      </header>
  );
};

export default AppHeader;
