import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modals');

const Modal = ({ closeAllModals, children }) => {

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
          {children}
        </section>
      </div>
      <ModalOverlay onClick={closeAllModals}/>
    </>),
    modalRoot);
};

Modal.propTypes = {
  closeAllModals: PropTypes.func.isRequired,
  children: PropTypes.any,
}


export default Modal;
