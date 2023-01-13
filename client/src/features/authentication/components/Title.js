import React from "react";
import LoginCSS from "../../../assets/Login.module.css";

const Title = ({ text }) => {
  return <span className={LoginCSS.title}>{text}</span>;
};

export default Title;
