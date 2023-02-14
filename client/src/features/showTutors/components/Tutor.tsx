import React from "react";
import { useSelector } from "react-redux";
import { getSubmittedText } from "../../searchTutors/index.tsx";
import TutorCSS from "../assets/Tutor.module.css";

interface TutorProps {
  tutor: {
    name: string;
    description: string;
    skills: string[];
    spokenLanguages: string[];
    lessonCost: number;
    picture: string;
  };
  priceFilter: [number, number];
  languagesFilter: string[];
}

const Tutor: React.FC<TutorProps> = ({
  tutor,
  priceFilter,
  languagesFilter,
}) => {
  const submittedText = useSelector(getSubmittedText);

  const containLanguage = tutor.spokenLanguages.some((language) =>
    languagesFilter.includes(language.toLowerCase())
  );
  if (
    (!languagesFilter.length || containLanguage == true) &&
    submittedText !== undefined &&
    ((tutor.lessonCost <= priceFilter[1] &&
      tutor.lessonCost >= priceFilter[0]) ||
      !priceFilter)
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

          <div className={TutorCSS.skills}>📚{tutor.skills.join(", ")}</div>
          <br />
          <div className={TutorCSS.spokenLanguages}>
            🗣{tutor.spokenLanguages.join(", ")}
          </div>
          <br />
          <div className={TutorCSS.description}>{tutor.description}</div>
        </div>
        <div className={TutorCSS.rightSide}>
          <div className={TutorCSS.price}>USD${tutor.lessonCost}</div>
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
