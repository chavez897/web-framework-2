import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderCSS from "../../assets/Header.module.css";

import SearchBar from "../../features/searchTutors/components/SearchBar";
import logoImage from "../../assets/logo.png";
import statistics from "../../assets/statistics.png";

import { useLocation, RouteComponentProps } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import Modal from "../modal/Modal";
import Authentication from "../../pages/Authentication";
import { API_ENDPOINTS } from "../../utils/apiEndpoints";
import useRefreshToken from "../../hooks/useRefreshToken";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

interface Props extends RouteComponentProps {}

const Header: React.FC<Props> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const path = useLocation().pathname;
  const refresh = useRefreshToken();
  const axiosPrivate = useAxiosPrivate();
  return (
    <div className={`container ${HeaderCSS.navBar}`}>
      <div className={HeaderCSS.appTitle}>
        <Link to={"/"} className={HeaderCSS.companyName}>
          <img className={HeaderCSS.logo} src={logoImage} alt="logo" />
          <h3 className={HeaderCSS.name}>Wise Pals</h3>
        </Link>
      </div>
      <div className={HeaderCSS.SearchBar}>{path != "/" && <SearchBar />}</div>
      <div className={HeaderCSS.links}>
        <Link to={"/addTutor"}>Teach</Link>
      </div>
      <div className={HeaderCSS.links}>
        {/* <Link to={"/"}>Test Auth</Link> */}
        <button
          onClick={() => {
            console.log("test auth");

            // refresh();
            axiosPrivate
              .get(API_ENDPOINTS.TEST_AUTH)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Test Auth
        </button>
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
