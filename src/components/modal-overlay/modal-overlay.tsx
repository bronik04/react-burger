import React from 'react';
import styles from './modal-overlay.module.scss';

type TModalOverlay = {
    onClick:  React.MouseEventHandler<HTMLDivElement>;
}

const ModalOverlay = ({onClick}: TModalOverlay) => {
  return (
    <div className={styles.overlay}
         onClick={onClick}
    >
    </div>
  );
};

export default ModalOverlay;
