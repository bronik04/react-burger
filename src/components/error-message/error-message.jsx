import React from 'react';
import styles from "./error-messege.module.scss";
import PropTypes from 'prop-types';


const ErrorMessage = ({ error }) => {
  return (
    <section className={`p-20 ${styles.modal}`}>
      <h2 className={`text text_type_main-large mb-8`}>
        {error}
      </h2>
      <p className={`text text_type_main-medium mb-5`}>
        Что-то пошло не так!
      </p>
    </section>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.any.isRequired
}

export default ErrorMessage;
