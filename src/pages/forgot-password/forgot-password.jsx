import React, { useState } from 'react';
import {
  Button,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../basic-form-styles.module.scss';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [emailValue, setEmailValue] = useState('');

  const onChangeEmail = e => {
    setEmailValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <fieldset className={styles.wrapper}>
          <h1 className={`text text_type_main-medium ${styles.heading}`}>
            Восстановление пароля
          </h1>
          <EmailInput
            value={emailValue}
            onChange={onChangeEmail}
          />
          <Button
            extraClass={styles.form__button}
            htmlType={'submit'}
            size={'medium'}
          >
            Восстановить
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

export default ForgotPasswordPage;
