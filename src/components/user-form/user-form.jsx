import React, { useEffect, useState } from 'react';
import styles from './basic-form-styles.module.scss';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchGetUser,
  fetchUpdateUser
} from "../../services/auth/auth-async-thunks";

const UserForm = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(state => state.auth.user);
  const [edit, setEdit] = useState(false);
  const [getUser, setGetUser] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setEdit(true);
  };

  const handleReset = () => {
    setEdit(false);
    if (name && email) {
      setForm({
        name,
        email,
        password: '',
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setGetUser(!getUser);
    setEdit(false);
    dispatch(fetchUpdateUser(form));
    dispatch(fetchGetUser());
  };

  useEffect(() => {
    if (name && email) {
      setForm({
        name: name,
        email: email,
        password: '',
      });
    }
  }, [name, email]);

  useEffect(() => {
    dispatch(fetchGetUser());
  }, [getUser]);

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <fieldset className={styles.wrapper}>
        <Input
          value={form.name}
          name={'name'}
          onChange={handleChange}
          size={'default'}
          placeholder={'Имя'}
          icon={'EditIcon'}
        />
        <EmailInput
          value={form.email}
          name={'email'}
          onChange={handleChange}
          isIcon={true}
          placeholder={'Логин'}
        />
        <PasswordInput
          value={form.password}
          name={'password'}
          onChange={handleChange}
          icon={'EditIcon'}
        />
        {edit && (
          <div className={styles.button__container}>
            <Button
              htmlType={'button'}
              type={'secondary'}
              onClick={handleReset}
            >
              Отмена
            </Button>
            <Button htmlType={'submit'}>Сохранить</Button>
          </div>
        )}
      </fieldset>
    </form>
  );
};

export default UserForm;
