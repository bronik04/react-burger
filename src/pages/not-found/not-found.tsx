import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import styles from './not-found.module.scss';

const NotFound404: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={'text text_type_main-large'}>Oops! 404 Error</h1>
        <p className={'text text_type_main-default'}>
          The page you requested does not exist
        </p>
        <p className={'text text_type_main-default'}>
          check the address or try{' '}
          <Link
            className={styles.link}
            to='/'
          >
            homepage
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound404;
