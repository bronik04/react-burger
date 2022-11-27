import React, { useState } from 'react';
import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {Link, Redirect, useLocation} from 'react-router-dom';
import styles from '../basic-form-styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../../services/slices/auth';
import { useForm } from '../../hooks/useForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuth } = useSelector(state => state.auth);
  const { values, handleChange } = useForm({
    email: 'bronik04@mail.ru',
    password: 'qwerty',
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchLogin(values));
  };

  if (isAuth) {
    return <Redirect to={location?.state?.from || '/'} />;
  }

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <fieldset className={styles.wrapper}>
          <h1
            className={`text text_type_main-medium ${styles.heading}`}
          >
            Вход
          </h1>
          <EmailInput
            value={values.email}
            name={'email'}
            onChange={handleChange}
          />
          <PasswordInput
            value={values.password}
            name={'password'}
            onChange={handleChange}
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
              <p
                className={`text text_type_main-default text_color_inactive`}
              >
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
              <p
                className={`text text_type_main-default text_color_inactive`}
              >
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
