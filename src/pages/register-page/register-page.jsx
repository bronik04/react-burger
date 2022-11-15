import React from 'react';
import {
  EmailInput,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './register-page.module.css';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <fieldset className={styles.wrapper}>
          <legend className={styles.heading}>Регистрация</legend>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;
