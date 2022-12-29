import React, { useState } from 'react';
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../../components/user-form/basic-form-styles.module.scss';
import {Link, Redirect, useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUpdatePassword } from '../../services/auth/auth';

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [form, setForm] = useState({
    password: '',
    token: '',
  });

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(fetchUpdatePassword(form));
    history.replace('/');
  };


  if (history.location?.state !== 'reset-password') {
    return <Redirect to={'/'}/>
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
            Восстановление пароля
          </h1>
          <PasswordInput
            placeholder={'Введите новый пароль'}
            value={form.password}
            name={'password'}
            onChange={onChange}
          />
          <Input
            value={form.token}
            name={'token'}
            onChange={onChange}
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
            <p
              className={`text text_type_main-default text_color_inactive`}
            >
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
