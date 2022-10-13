import React, {useState} from 'react';
import styles from './app-header.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderButton from '../header-button/header-button';

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
                isActive={current==='constructor'}
                value={'constructor'}
                setCurrent={setCurrent}
                >
              </HeaderButton>
            </li>
            <li>
              <HeaderButton
                icon={ListIcon}
                text={'Лента заказов'}
                isActive={current==='orders'}
                value={'orders'}
                setCurrent={setCurrent}
              >
              </HeaderButton>
            </li>
          </ul>
          <a href='#'>
            <Logo></Logo>
          </a>
          <HeaderButton
            icon={ProfileIcon}
            text={'Личный кабинет'}
            isActive={current==='profile'}
            value={'profile'}
            setCurrent={setCurrent}
          >
          </HeaderButton>
        </nav>
      </header>
  );
};

export default AppHeader;
