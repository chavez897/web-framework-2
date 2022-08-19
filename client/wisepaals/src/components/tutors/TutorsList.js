import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
/*
import {
  getAllTutors,
  getTutorsRequestStatus,
  getTutorsRequestError,
  fetchTeachers,
} from "../../features/availableTeachersSlice";
*/
import Tutor from "./Tutor";
import TutorsListCSS from "./TutorsList.module.css";
import { useParams } from "react-router-dom";
import { getSubmittedText, getAllTutors } from "../../features/searchBarSlice";

const TutorsList = () => {
  const [priceFilter, setPriceFilter] = useState(10000);
  const [tutorsState, setTutorsState] = useState();
  const [spokenLanguagesFilter, setSpokenLanguagesFilter] = useState("English");
  // const dispatch = useDispatch();

  const tutors = useSelector(getAllTutors);
  console.log("Tutors es:");
  console.log(tutors);
  console.log("Lo de arriba");
  //setTutorsState(tutors);

  // const tutorsRequestStatus = useSelector(getTutorsRequestStatus);
  // const tutorsRequestError = useSelector(getTutorsRequestError);
  const submittedText = useSelector(getSubmittedText);
  console.log("submittedText", submittedText);
  let { skill } = useParams();
  let lastSubmittedText = "";

  if (!tutors) return <div>Loading...</div>;

  //Map function is to do something to each element of the array
  const tutorItems = tutors.map((tutor) => {
    return (
      <Tutor
        priceFilter={priceFilter}
        languagesFilter={spokenLanguagesFilter}
        key={tutor._id}
        tutor={tutor}
      />
    );
  });
  return (
    <div className={TutorsListCSS.filterTutorsPageContainer}>
      <div className={TutorsListCSS.filterBar}>
        <div>
          <input
            placeholder="Price bellow"
            onChange={(event) => setPriceFilter(event.target.value)}
          ></input>
        </div>
        <input
          placeholder="Class language"
          onChange={(event) => setSpokenLanguagesFilter(event.target.value)}
        ></input>
      </div>
      <div className={TutorsListCSS.tutorsGrid}>{tutorItems}</div>
    </div>
  );
};

export default TutorsList;
