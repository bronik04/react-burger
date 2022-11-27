import React, {useState} from 'react';
import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {Link, Redirect} from 'react-router-dom';
import styles from '../basic-form-styles.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLogin} from "../../services/slices/auth";

const LoginPage = () => {
  const dispatch = useDispatch();
  const {isAuth} = useSelector(state => state.auth);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onChange = e => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchLogin(form))
      .catch(error => console.log(error));
  };

  if (isAuth) {
    return (
      <Redirect to={
        '/'
      }/>
    )
  }

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <fieldset className={styles.wrapper}>
          <h1 className={`text text_type_main-medium ${styles.heading}`}>
            Вход
          </h1>
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
            style={{alignSelf: 'center'}}
            htmlType={'submit'}
            size={'medium'}
            onClick={handleSubmit}
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
