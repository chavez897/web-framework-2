import React from "react";
import LoginCSS from "../../../assets/Login.module.css";
import { BiHide, BiShow } from "react-icons/bi";

const ShowOrHideIcon = ({ pwFieldType, togglePwVisibility }) => {
  if (pwFieldType === "text")
    return (
      <BiHide
        className={`${LoginCSS.reactIcon} ${LoginCSS.viewHideIcon}`}
        onClick={() => togglePwVisibility()}
      />
    );
  else
    return (
      <BiShow
        className={`${LoginCSS.reactIcon} ${LoginCSS.viewHideIcon}`}
        onClick={() => togglePwVisibility()}
      />
    );
};

export default ShowOrHideIcon;
