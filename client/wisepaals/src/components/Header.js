import React from "react";
import { Link } from "react-router-dom";
import HeaderCSS from "./Header.module.css";

import SearchBar from "./SearchBar";
import logoImage from "./logo.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <div className={`container ${HeaderCSS.navBar}`}>
      <div className={HeaderCSS.appTitle}>
        <Link to={"/"} className={HeaderCSS.companyName}>
          <img className={HeaderCSS.logo} src={logoImage} alt="logo" />
          <h3 className={HeaderCSS.name}>Wise Paals</h3>
        </Link>
      </div>
      {path != "/" && <SearchBar />}
      <div className={HeaderCSS.links}>
        <Link to={"/addTutor"}>Teach</Link>
      </div>
    </div>
  );
};

/*
const Header = () => {
  return (
    <div>
      <div className="links">
        <Link to={"/"}>
          <img src={logoImage} alt="logo" />
          <h3 id="totoId">Wise Paals</h3>
        </Link>
      </div>
      <SearchBar />
      <div className="linkh3">
        <Link to={"/addTutor"}>Teach</Link>
        <Link style={{ color: "pink" }} to={"/addTutor"}>
          Totoro
        </Link>
      </div>
    </div>
  );
};
*/
export default Header;
