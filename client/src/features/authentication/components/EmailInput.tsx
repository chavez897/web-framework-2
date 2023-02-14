import React from "react";
import LoginCSS from "../../../assets/Login.module.css";
import { AiOutlineMail } from "react-icons/ai";

const EmailInput: React.FC = () => {
  return (
    <div className={LoginCSS.inputField}>
      <input type="text" placeholder="Email" required />
      <AiOutlineMail className={LoginCSS.reactIcon} />
    </div>
  );
};

export default EmailInput;
