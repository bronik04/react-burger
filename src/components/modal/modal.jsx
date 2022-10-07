import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById('modals');

const Modal = ({ onOverlayClick, children }) => {

  return ReactDOM.createPortal(
    (<>
      <div className={styles.modal}>
        <section className={`${styles.modal__container}`}>
          {children}
        </section>
      </div>
      <ModalOverlay onClick={onOverlayClick}/>
    </>),
    modalRoot);
};


export default Modal;
