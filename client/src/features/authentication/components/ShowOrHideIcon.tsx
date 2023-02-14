import React from "react";
import LoginCSS from "../../../assets/Login.module.css";
import { BiHide, BiShow } from "react-icons/bi";

interface IProps {
  pwFieldType: string;
  togglePwVisibility: () => void;
}

const ShowOrHideIcon = (props: IProps) => {
  const { pwFieldType, togglePwVisibility } = props;

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
