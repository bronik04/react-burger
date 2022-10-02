import React from 'react';
import styles from './app-header.module.css'
import {
  Logo,
  BurgerIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderButton from "../header-button/header-button";
import data from "../../utils/data";

const AppHeader = () => {
  return (
    <div>
      <header className={`${styles.header} pt-4 pb-4`}>
        <nav className={styles.header__nav}>
          <ul className={`${styles.menuList} `}>
            <li>
              <HeaderButton
                text={'Конструктор'}>
              </HeaderButton>
            </li>
            <li>
              <HeaderButton
                text={'Лента заказов'}>
              </HeaderButton>
            </li>
          </ul>
          <Logo></Logo>
          <HeaderButton
            text={'Личный кабинет'}>
          </HeaderButton>
        </nav>
      </header>
    </div>
  );
};

export default AppHeader;
