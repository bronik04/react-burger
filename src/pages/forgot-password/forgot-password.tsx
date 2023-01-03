import React, {FC, useState} from 'react';
import {
  Button,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../../components/user-form/basic-form-styles.module.scss';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchForgotPassword } from '../../services/auth/auth-async-thunks';
import { selectAuth } from '../../services/auth/auth-selectors';
import { useAppDispatch } from '../../services/store';

const ForgotPasswordPage: FC = () => {
  const { isAuth } = useSelector(selectAuth);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const resetPassword = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchForgotPassword({ email }));
    history.replace({
      pathname: '/reset-password',
      state: 'reset-password',
    });
  };

  if (isAuth) {
    return <Redirect to={'/'} />;
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={resetPassword}>
        <fieldset className={styles.wrapper}>
          <h1 className={`text text_type_main-medium ${styles.heading}`}>
            Восстановление пароля
          </h1>
          <EmailInput value={email} name={email} onChange={onChangeEmail} />
          {email && (
            <Button
              extraClass={styles.form__button}
              htmlType={'submit'}
              size={'medium'}
            >
              Восстановить
            </Button>
          )}
          <div className={styles.text__container}>
            <p className={`text text_type_main-default text_color_inactive`}>
              Вспомнили пароль?
            </p>
            <Link className={styles.link} to={'/login'}>
              Войти
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
