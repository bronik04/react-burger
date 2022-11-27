import React, { useEffect, useState } from 'react';
import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../basic-form-styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import ProfileNav from '../../components/profile-nav/profile-nav';
import {
  fetchGetUser,
  fetchUpdateUser,
} from '../../services/slices/auth';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(state => state.auth);
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
    setForm({
      name: name,
      email: email,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setGetUser(!getUser);
    setEdit(false);
    dispatch(fetchUpdateUser(form));
  };

  useEffect(() => {
    dispatch(fetchGetUser());
  }, [getUser]);

  useEffect(() => {
    setForm({
      name: name,
      email: email,
    });
  }, []);

  return (
    <div className={styles.container}>
      <ProfileNav />
      <form className={styles.form}>
        <fieldset className={styles.wrapper}>
          <Input
            value={form.name}
            name={'name'}
            onChange={handleChange}
            size={'default'}
            placeholder={'Имя'}
            icon={'EditIcon'}
            isIcon={true}
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
              <Button
                htmlType={'submit'}
                onClick={handleSubmit}
              >
                Сохранить
              </Button>
            </div>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default ProfilePage;
