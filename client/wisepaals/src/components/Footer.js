import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import FooterCSS from "./Footer.module.css";
import "./Footer.css";

const Footer = () => {
  var dark = false;
  var currentToggleBtn;

  const toggleBtnReference = () => {
    currentToggleBtn = document.querySelector(FooterCSS.toggleBtn);
  };

  toggleBtnReference();

  return (
    <div className="container">
      <button
        className={FooterCSS.toggleBtn}
        onClick={() => {
          console.log("Tururu");
          dark = !dark;

          var bigWrapper = document.querySelector(".bigWrapper");

          if (dark) {
            bigWrapper.classList.remove("light");
            bigWrapper.classList.add("dark");
          } else {
            bigWrapper.classList.remove("dark");
            bigWrapper.classList.add("light");
          }
        }}
      >
        <FontAwesomeIcon
          className={`icon ${FooterCSS.themeIcon}`}
          icon={faMoon}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className={`icon ${FooterCSS.themeIcon}`}
          icon={faSun}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Footer;
