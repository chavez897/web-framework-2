import React from "react";
import ReactDOM from "react-dom";
import ModalCSS from "../../assets/Modal.module.css";

const Modal = ({ open, setIsModalOpen, children }) => {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <div>
      <div className={ModalCSS.overlay} onClick={() => setIsModalOpen(false)} />
      <div className={ModalCSS.modal}>{children}</div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
