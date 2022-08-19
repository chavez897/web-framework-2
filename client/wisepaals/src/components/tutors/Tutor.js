import React from "react";
import { useSelector } from "react-redux";
import { getSubmittedText } from "../../features/searchBarSlice";
import TutorCSS from "./Tutor.module.css";

const Tutor = ({ tutor, priceFilter, languagesFilter }) => {
  const submittedText = useSelector(getSubmittedText);

  const containLanguage = tutor.spokenLanguages.find((language) => {
    if (language.toLowerCase().includes(languagesFilter.toLowerCase())) {
      return true;
    }
  });

  if (
    (containLanguage !== undefined || !containLanguage) &&
    submittedText !== undefined &&
    (tutor.lessonCost <= priceFilter || !priceFilter)
  )
    return (
      <div className={`${TutorCSS.card}`}>
        <div className={`${TutorCSS.leftSide}`}>
          <img src={tutor.picture} />
        </div>
        <div className={TutorCSS.center}>
          <div className={TutorCSS.cardTitle}>
            <h3>{tutor.name}</h3>
          </div>

          <div>{tutor.skills.join(", ")}</div>
          <br />
          <div>{tutor.spokenLanguages.join(", ")}</div>
          <br />
          <div>{tutor.description}</div>
          <div>hour rate: {tutor.lessonCost}</div>
        </div>
        <div className={TutorCSS.rightSide}>
          <div className={TutorCSS.cardButtons}>
            <button className={TutorCSS.btn}>Book session</button>
            <button className={`${TutorCSS.btn} ${TutorCSS.btnOutline}`}>
              Contact tutor
            </button>
          </div>
        </div>
      </div>
    );
};

export default Tutor;
