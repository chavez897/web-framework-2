import React from "react";
import ReactDOM from "react-dom";
import ModalCSS from "../../assets/Modal.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  open: boolean;
  setIsModalOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, setIsModalOpen, children }) => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   setIsModalOpen(true);
  // }, []);

  if (!open) {
    // navigate("/");
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
