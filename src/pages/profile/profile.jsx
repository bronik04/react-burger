import React, {useEffect, useState} from 'react';
import {
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../basic-form-styles.module.scss';
import profileStyles from './profile.module.scss';
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {fetchLogout} from "../../services/slices/auth";

const ProfilePage = () => {
   const dispatch = useDispatch();
   const {name, email, isAuth} = useSelector(state => state.auth);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  useEffect(() => {
    setForm({
      name: name,
      email: email
    })
  }, []);

  const logout = () => {
    dispatch(fetchLogout());
  }


  return (
    <div className={styles.container}>
      <nav className={profileStyles.navigation}>
        <NavLink
          exact
          to={'/profile'}
          className={`text text_type_main-medium text_color_inactive`}
          activeClassName={profileStyles.active}
        >
          Профиль
        </NavLink>
        <NavLink
          exact
          to={'/profile/orders'}
          className={`text text_type_main-medium text_color_inactive`}
          activeClassName={profileStyles.active}
        >
          История заказов
        </NavLink>
        <NavLink
          to={'/login'}
          className={`text text_type_main-medium text_color_inactive mb-20`}
          activeClassName={profileStyles.active}
          onClick={logout}
        >
          Выход
        </NavLink>

        <p className={'text text_type_main-default text_color_inactive'}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <form className={styles.form}>
        <fieldset className={styles.wrapper}>
          <Input
            value={form.name}
            name={'name'}
            onChange={handleSubmit}
            size={'default'}
            placeholder={'Имя'}
            icon={'EditIcon'}
          />
          <EmailInput
            value={form.email}
            name={'email'}
            onChange={handleSubmit}
            isIcon={true}
            placeholder={'Логин'}
          />
          <PasswordInput
            value={form.password}
            name={'password'}
            onChange={handleSubmit}
            icon={'EditIcon'}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default ProfilePage;
