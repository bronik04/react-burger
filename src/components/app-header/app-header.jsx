import React, { useState } from 'react';
import styles from './app-header.module.css';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderButton from '../header-button/header-button';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  const [current, setCurrent] = useState('constructor');

  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={styles.header__nav}>
        <ul className={`${styles.menu__list}`}>
          <li>
            <HeaderButton
              icon={BurgerIcon}
              text={'Конструктор'}
              to={'/'}
              isActive={current === 'constructor'}
              value={'constructor'}
              setCurrent={setCurrent}
            />
          </li>
          <li>
            <HeaderButton
              icon={ListIcon}
              text={'Лента заказов'}
              to={'/'}
              isActive={current === 'orders'}
              value={'orders'}
              setCurrent={setCurrent}
            ></HeaderButton>
          </li>
        </ul>
        <Link to={'/'}>
          <Logo></Logo>
        </Link>
        <HeaderButton
          icon={ProfileIcon}
          text={'Личный кабинет'}
          to={'/register'}
          isActive={current === 'profile'}
          value={'profile'}
          setCurrent={setCurrent}
        />
      </nav>
    </header>
  );
};

export default AppHeader;
