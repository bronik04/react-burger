import React, { useState } from 'react';
import {
  Button,
   Input, PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../basic-form-styles.module.scss';
import { Link } from 'react-router-dom';

const ResetPasswordPage = () => {
  const [passwordValue, setPasswordValue] = useState('');
  const [codeValue, setCodeValue] = useState('');

  const onChangePassword = e => {
    setPasswordValue(e.target.value);
  };
  const onChangeCode = e => {
    setCodeValue(e.target.value);
  };


  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <fieldset className={styles.wrapper}>
          <h1 className={`text text_type_main-medium ${styles.heading}`}>
            Восстановление пароля
          </h1>
          <PasswordInput
            placeholder={'Введите новый пароль'}
            value={passwordValue}
            onChange={onChangePassword}
          />
          <Input
            value={codeValue}
            onChange={onChangeCode}
            size={'default'}
            placeholder={'Введите код из письма'}
          />
          <Button
            extraClass={styles.form__button}
            htmlType={'submit'}
            size={'medium'}
          >
            Сохранить
          </Button>
          <div className={styles.text__container}>
            <p className={`text text_type_main-default text_color_inactive`}>
              Вспомнили пароль?
            </p>
            <Link
              className={styles.link}
              to={'/login'}
            >
              Войти
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
