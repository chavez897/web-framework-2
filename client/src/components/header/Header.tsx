import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderCSS from "../../assets/Header.module.css";

import SearchBar from "../../features/searchTutors/components/SearchBar.tsx";
import logoImage from "../../assets/logo.png";
import statistics from "../../assets/statistics.png";

import { useLocation, RouteComponentProps } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import Modal from "../modal/Modal.tsx";
import Authentication from "../../pages/Authentication.tsx";

interface Props extends RouteComponentProps {}

const Header: React.FC<Props> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const path = useLocation().pathname;
  return (
    <div className={`container ${HeaderCSS.navBar}`}>
      <div className={HeaderCSS.appTitle}>
        <Link to={"/"} className={HeaderCSS.companyName}>
          <img className={HeaderCSS.logo} src={logoImage} alt="logo" />
          <h3 className={HeaderCSS.name}>Wise Paals</h3>
        </Link>
      </div>
      <div className={HeaderCSS.SearchBar}>{path != "/" && <SearchBar />}</div>
      <div className={HeaderCSS.links}>
        <Link to={"/addTutor"}>Teach</Link>
      </div>
      <div className={HeaderCSS.login} onClick={() => setIsModalOpen(true)}>
        <MdLogin /> <div className={HeaderCSS.loginText}>Login</div>
      </div>
      <Link to={"/statistics"} className={HeaderCSS.companyName}>
        <img className={HeaderCSS.logo} src={statistics} alt="logo" />
      </Link>
      <Modal open={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <Authentication />
      </Modal>
    </div>
  );
};

export default Header;
