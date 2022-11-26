import React, {useEffect, useState} from 'react';
import {
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../basic-form-styles.module.scss';
import {useSelector} from "react-redux";
import ProfileNav from "../../components/profile-nav/profile-nav";

const ProfilePage = () => {
   const {name, email} = useSelector(state => state.auth);

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

  return (
    <div className={styles.container}>
      <ProfileNav/>
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
