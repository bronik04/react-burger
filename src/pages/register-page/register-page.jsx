import React from 'react';
import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './register-page.module.scss';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const f = () => {};
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <fieldset className={styles.wrapper}>
          <h1 className={`text text_type_main-medium ${styles.heading}`}>
            Регистрация
          </h1>
          <Input
            value={''}
            onChange={f}
            size={'default'}
            placeholder={'Имя'}
          />
          <Input
            value={''}
            onChange={f}
            size={'default'}
            placeholder={'E-mail'}
          />
          <Input
            value={''}
            onChange={f}
            size={'default'}
            placeholder={'Пароль'}
          />
          <Button
            style={{ alignSelf: 'center' }}
            htmlType={'submit'}
            size={'medium'}
          >
            Зарегистрироваться
          </Button>
          <div className={styles.login}>
            <p className={`text text_type_main-default text_color_inactive`}>
              Уже зарегистрированы?
            </p>
            <Link
              className={styles.login__link}
              to={'/'}
            >
              Войти
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;
