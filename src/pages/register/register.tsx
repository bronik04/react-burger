import React, { useState } from 'react';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../../components/user-form/basic-form-styles.module.scss';
import { Link, Redirect } from 'react-router-dom';
import {fetchRegister} from "../../services/auth/auth-async-thunks";
import {selectAuth} from "../../services/auth/auth-selectors";
import {useAppDispatch, useAppSelector} from "../../services/store";
import {IRegister} from "../../types";

const Register = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(selectAuth);
  const [form, setForm] = useState<IRegister>({
    email: '',
    password: '',
    name: '',
  });

  const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchRegister(form)).catch(error => console.log(error));
  };

  if (isAuth) {
    return <Redirect to={'/'} />;
  }

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleRegister}
      >
        <fieldset className={styles.wrapper}>
          <h1
            className={`text text_type_main-medium ${styles.heading}`}
          >
            Регистрация
          </h1>
          <Input
            value={form.name}
            name={'name'}
            onChange={onChange}
            size={'default'}
            placeholder={'Имя'}
          />
          <EmailInput
            value={form.email}
            name={'email'}
            onChange={onChange}
          />
          <PasswordInput
            value={form.password}
            name={'password'}
            onChange={onChange}
          />
          <Button
            extraClass={styles.form__button}
            htmlType={'submit'}
            size={'medium'}
          >
            Зарегистрироваться
          </Button>
          <div className={styles.text__container}>
            <p
              className={`text text_type_main-default text_color_inactive`}
            >
              Уже зарегистрированы?
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

export default Register;
