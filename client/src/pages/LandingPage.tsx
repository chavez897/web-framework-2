import React, { useEffect, useState } from "react";
import LandingPageCSS from "../assets/LandingPage.module.css";
import landingPicture from "../assets/landingPicture.png";
import SearchBar from "../features/searchTutors/components/SearchBar.tsx";
import axios from "axios";
import { useDispatch } from "react-redux";

const LandingPage: React.FC = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/v1/contents/63e7a5d14236e852403de3c6")
      .then((response) => {
        setContent(response.data.data.description);
        console.log(response.data.data.description);
      });
  }, []);
  return (
    <div className={LandingPageCSS.showcaseArea}>
      <div className={`container ${LandingPageCSS.container}`}>
        <div className={LandingPageCSS.left}>
          <div className={LandingPageCSS.title}>
            <h1>Find a tutor,</h1>
            <h1>In any topic that you want.</h1>
            <p className={LandingPageCSS.text}>{content}</p>
            <SearchBar />
          </div>
        </div>
        <div className={LandingPageCSS.right}>
          <img
            className={LandingPageCSS.landingPicture}
            src={landingPicture}
            alt="landingPicture"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
