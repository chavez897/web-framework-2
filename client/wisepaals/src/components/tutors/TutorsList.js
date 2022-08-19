import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllTutors,
  getTutorsRequestStatus,
  getTutorsRequestError,
  fetchTeachers,
} from "../../features/availableTeachersSlice";
import Tutor from "./Tutor";
import TutorsListCSS from "./TutorsList.module.css";
import { useParams } from "react-router-dom";
import { getSubmittedText } from "../../features/searchBarSlice";

const TutorsList = () => {
  const [priceFilter, setPriceFilter] = useState(10000);
  const [spokenLanguagesFilter, setSpokenLanguagesFilter] = useState("English");
  const dispatch = useDispatch();
  const tutors = useSelector(getAllTutors);
  const tutorsRequestStatus = useSelector(getTutorsRequestStatus);
  const tutorsRequestError = useSelector(getTutorsRequestError);
  const submittedText = useSelector(getSubmittedText);
  console.log("submittedText", submittedText);
  let { skill } = useParams();
  let lastSubmittedText = "";

  //The second parameter are the dependencies. The side effects will run just when those dependencies change.
  useEffect(() => {
    console.log("disparo: ");

    // console.log(submittedText);
    // if (tutorsRequestStatus === "idle") {
    //   dispatch(fetchTeachers(skill));
    // }
    if (
      tutorsRequestStatus === "idle" ||
      (submittedText != undefined && submittedText != lastSubmittedText)
    ) {
      console.log("I'm in bro");
      lastSubmittedText = submittedText;
      // dispatch(fetchTeachers(skill));
    }
  }, [tutorsRequestStatus, submittedText]);

  if (!tutors.tutors) return <div>Loading...</div>;

  //Map function is to do something to each element of the array
  const tutorItems = tutors.tutors.map((tutor) => {
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
