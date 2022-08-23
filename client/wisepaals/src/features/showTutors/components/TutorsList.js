import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tutor from "./Tutor";
import TutorsListCSS from "../assets/TutorsList.module.css";
import { useParams } from "react-router-dom";
import {
  getSubmittedText,
  getAllTutors,
  textSubmitted,
} from "../../searchTutors";
import fetchTeachers from "../../../services/fetchTeachersService";
import FilterBar from "./filterBar/FilterBar";

const TutorsList = () => {
  const { skill } = useParams();
  const dispatch = useDispatch();
  const submittedText = useSelector(getSubmittedText);

  useEffect(() => {
    if (skill != submittedText) {
      dispatch(textSubmitted(skill));
      dispatch(fetchTeachers(skill));
    }
  }, []);

  const [priceFilter, setPriceFilter] = useState(10000);
  const [spokenLanguagesFilter, setSpokenLanguagesFilter] = useState([]);

  const tutors = useSelector(getAllTutors);

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
      <FilterBar
        tutorItems={tutorItems}
        setPriceFilter={setPriceFilter}
        setSpokenLanguagesFilter={setSpokenLanguagesFilter}
      />
      <div className={TutorsListCSS.tutorsGrid}>{tutorItems}</div>
    </div>
  );
};

export default TutorsList;
