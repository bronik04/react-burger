import React from 'react';
import styles from './modal-overlay.module.css';

const ModalOverlay = ({onClick, children}) => {
  return (
    <div className={styles.overlay} onClick={onClick}>
      {children}
    </div>
  );
};

export default ModalOverlay;
