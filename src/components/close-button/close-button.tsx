import React, {FC} from 'react';
import styles from './close-button.module.scss';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';

type CloseButtonProps = {
    onClick:  React.MouseEventHandler<HTMLButtonElement> | undefined
}

const CloseButton: FC<CloseButtonProps> = ({onClick}) => {
  return (
    <button
      onClick={onClick}
      className={styles.button__close}
    >
      <CloseIcon type={'primary'}/>
    </button>
  );
};

export default CloseButton;
