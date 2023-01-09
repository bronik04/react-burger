import React, {FC} from 'react';
import styles from "./error-messege.module.scss";

export type TErrorMessage = {error: string};

const ErrorMessage:FC<TErrorMessage> = ({ error }) => {
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

export default ErrorMessage;
