import React from "react";
import LoginCSS from "../../../assets/Login.module.css";

const MainButton = ({ text }) => {
  return (
    <div className={`${LoginCSS.inputField} ${LoginCSS.button}`}>
      <input type="button" value={text} />
    </div>
  );
};

export default MainButton;
