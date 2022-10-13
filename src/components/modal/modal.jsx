import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';
import PropTypes from 'prop-types';
import CloseButton from '../close-button/close-button';

const modalRoot = document.getElementById('modals');

const Modal = ({title, closeAllModals, children}) => {

  useEffect(() => {

    const onEscKeydown = (evt) => {
      evt.key === 'Escape' && closeAllModals();
    };

    document.addEventListener('keydown', onEscKeydown);

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    (<>
      <div className={styles.modal}>
        <section className={`${styles.modal__container}`}>
          <header className={`pt-10 pr-10 pl-10 ${styles.header}`}>
            <h3 className={`text text_type_main-medium`}>
              {title}
            </h3>
            <CloseButton onClick={closeAllModals}/>
          </header>
          {children}
        </section>
      </div>
      <ModalOverlay onClick={closeAllModals}/>
    </>),
    modalRoot);
};

Modal.propTypes = {
  title: PropTypes.string,
  closeAllModals: PropTypes.func.isRequired,
  children: PropTypes.any,
}


export default Modal;
