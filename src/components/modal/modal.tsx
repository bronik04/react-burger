import React, { FC, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.scss';
import CloseButton from '../close-button/close-button';

const modalRoot = document.getElementById('modals') as HTMLElement;

type TModal = {
  children: ReactNode;
  closeModal: () => void;
  title?: string;
};

const Modal: FC<TModal> = ({ title, closeModal, children }) => {
  useEffect(() => {
    const onEscKeydown = (evt: KeyboardEvent) => {
      evt.key === 'Escape' && closeModal();
    };

    document.addEventListener('keydown', onEscKeydown);

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <section className={`${styles.modal__container}`}>
          <header className={`pt-10 pr-10 pl-10 ${styles.header}`}>
            <h3 className={`text text_type_main-medium`}>{title}</h3>
            <CloseButton onClick={closeModal} />
          </header>
          {children}
        </section>
      </div>
      <ModalOverlay onClick={closeModal} />
    </>,
    modalRoot,
  );
};

export default Modal;
