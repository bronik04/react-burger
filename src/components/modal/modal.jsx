import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById('modals');

const Modal = ({ title, onOverlayClick, onEscKeydown, children }) => {

  useEffect(() => {
    document.addEventListener('keydown', onEscKeydown);

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    (<>
      <ModalOverlay onClick={onOverlayClick}>
        <section className={`p-10 ${styles.modal}`}>
          <header className={styles.modal__header}>
            <h3 className={`text text_type_main-large`}>{title}</h3>
            <button className={styles.modal__close}><CloseIcon type={"primary"}/></button>
          </header>
          {children}
        </section>
      </ModalOverlay>
    </>),
    modalRoot);
};


export default Modal;
