import React, { useCallback, useState } from 'react';
import {
  Button,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../basic-form-styles.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchResetPassword } from '../../services/slices/auth';

const ForgotPasswordPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  // const resetPassword = useCallback((e) => {
  //   e.preventDefault()
  //   console.log(email);
  //   dispatch(fetchResetPassword({ email }));
  //   history.replace({ pathname: '/reset-password' });
  // }, [history, dispatch]);

  const resetPassword = (e) => {
    e.preventDefault()
    console.log({ email });
    dispatch(fetchResetPassword({ email }));
    history.replace({ pathname: '/reset-password' });
  }


  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={resetPassword}
      >
        <fieldset className={styles.wrapper}>
          <h1 className={`text text_type_main-medium ${styles.heading}`}>
            Восстановление пароля
          </h1>
          <EmailInput
            value={email}
            name={email}
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
