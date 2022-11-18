import React, { useCallback, useState } from 'react';
import {
  Button,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../basic-form-styles.module.scss';
import { Link, useHistory } from 'react-router-dom';
import {reset} from "../../utils/burger-api";

const ForgotPasswordPage = () => {
  const [emailValue, setEmailValue] = useState('');
  const history = useHistory();

  const resetPassword = useCallback(() => {
    history.replace({ pathname: '/reset-password' });
    reset();
  }, [history]);

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
            onClick={resetPassword}
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
