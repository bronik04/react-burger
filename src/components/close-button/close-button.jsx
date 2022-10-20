import React from 'react';
import PropTypes from 'prop-types';
import styles from './close-button.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const CloseButton = ({onClick}) => {
  return (
    <button
      onClick={onClick}
      className={styles.button__close}
    >
      <CloseIcon type={'primary'}/>
    </button>
  );
};

CloseButton.propTypes = {
 onClick: PropTypes.func.isRequired,
};

export default CloseButton;
