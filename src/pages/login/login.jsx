import React, {useState} from 'react';
import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { Link } from 'react-router-dom';
import styles from '../basic-form-styles.module.scss';

const LoginPage = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const onChangeEmail = e => {
    setEmailValue(e.target.value);
  };

  const onChangePassword = e => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <fieldset className={styles.wrapper}>
          <h1 className={`text text_type_main-medium ${styles.heading}`}>
            Вход
          </h1>
          <EmailInput
            value={emailValue}
            onChange={onChangeEmail}
          />
          <PasswordInput
            value={passwordValue}
            onChange={onChangePassword}
          />
          <Button
            extraClass={styles.form__button}
            style={{ alignSelf: 'center' }}
            htmlType={'submit'}
            size={'medium'}
          >
            Войти
          </Button>
          <div className={styles.text__wrapper}>
            <div className={styles.text__container}>
              <p className={`text text_type_main-default text_color_inactive`}>
                Вы — новый пользователь?
              </p>
              <Link
                className={styles.link}
                to={'/register'}
              >
                Зарегистрироваться
              </Link>
            </div>
            <div className={styles.text__container}>
              <p className={`text text_type_main-default text_color_inactive`}>
                Забыли пароль?
              </p>
              <Link
                className={styles.link}
                to={'/forgot-password'}
              >
                Восстановить пароль
              </Link>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginPage;
