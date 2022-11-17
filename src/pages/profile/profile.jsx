import React, { useState } from 'react';
import {
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../basic-form-styles.module.scss';
import profileStyles from './profile.module.scss';
import { NavLink } from 'react-router-dom';

const ProfilePage = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [nameValue, setNameValue] = useState('');

  const onChangeName = e => {
    setNameValue(e.target.value);
  };

  const onChangeEmail = e => {
    setEmailValue(e.target.value);
  };

  const onChangePassword = e => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <nav className={profileStyles.navigation}>
        <NavLink
          to={''}
          className={`text text_type_main-medium text_color_inactive`}
          activeClassName={`text_color_primary`}
        >
          Профиль
        </NavLink>
        <NavLink
          to={''}
          className={`text text_type_main-medium text_color_inactive`}
          activeClassName={`text_color_primary`}
        >
          История заказов
        </NavLink>
        <NavLink
          to={''}
          className={`text text_type_main-medium text_color_inactive mb-20`}
          activeClassName={`text_color_primary`}
        >
          Выход
        </NavLink>
        <p className={'text text_type_main-default text_color_inactive'}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <form className={styles.form}>
        <fieldset className={styles.wrapper}>
          <Input
            value={nameValue}
            onChange={onChangeName}
            size={'default'}
            placeholder={'Имя'}
            icon={'EditIcon'}
          />
          <EmailInput
            value={emailValue}
            onChange={onChangeEmail}
            isIcon={true}
            placeholder={'Логин'}
          />
          <PasswordInput
            value={'passwordValue'}
            onChange={onChangePassword}
            name={'password'}
            icon={'EditIcon'}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default ProfilePage;
