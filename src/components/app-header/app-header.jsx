import React, { useState } from 'react';
import styles from './app-header.module.scss';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderButton from '../header-button/header-button';
import {Link, useHistory, useRouteMatch} from 'react-router-dom';

const AppHeader = () => {
  const [current, setCurrent] = useState('constructor');
  console.log(current);

  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={styles.header__nav}>
        <ul className={`${styles.menu__list}`}>
          <li>
            <HeaderButton
              icon={BurgerIcon}
              text={'Конструктор'}
              to={'/react-burger'}
              isActive={current === 'constructor'}
              value={'constructor'}
              setCurrent={setCurrent}
            />
          </li>
          <li>
            <HeaderButton
              icon={ListIcon}
              text={'Лента заказов'}
              to={'/order'}
              isActive={current === 'orders'}
              value={'orders'}
              setCurrent={setCurrent}
            ></HeaderButton>
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
            to={'/register'}
            isActive={current === 'profile'}
            value={'profile'}
            setCurrent={setCurrent}
          />
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
