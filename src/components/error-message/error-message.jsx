import React from 'react';
import styles from "./error-messege.module.css";
import PropTypes from 'prop-types';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";


const ErrorMessage = ({error, closeModal}) => {
  return (
    <section className={`p-20 ${styles.modal}`}>
      <button onClick={closeModal} className={styles.close}>
        <CloseIcon type={'primary'}/>
      </button>
      <h2 className={`text text_type_main-large mb-8`}>
        {error}
      </h2>
      <p className={`text text_type_main-medium mb-5`}>
        Что-то пошло не так!
      </p>
      <p className={`text text_type_main-medium`}>
        Попробуйте перезагрузить страницу!
      </p>
    </section>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.any.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default ErrorMessage;
