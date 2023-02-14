import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tutor from "./Tutor.tsx";
import TutorsListCSS from "../assets/TutorsList.module.css";
import { useParams } from "react-router-dom";
import {
  getSubmittedText,
  getAllTutors,
  textSubmitted,
} from "../../searchTutors/index.tsx";
import fetchTeachers from "../../../services/fetchTeachersService.ts";
import FilterBar from "./filterBar/FilterBar.tsx";

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

  const [priceFilter, setPriceFilter] = useState<[number, number]>([0, 1000]);
  const [spokenLanguagesFilter, setSpokenLanguagesFilter] = useState<string[]>(
    []
  );

  const tutors = useSelector(getAllTutors);

  if (!tutors) return <div>Loading...</div>;
  //Map function is to do something to each element of the array
  const tutorItems = tutors.map((tutor: { _id: string }) => {
    return (
      <Tutor
        priceFilter={priceFilter}
        languagesFilter={spokenLanguagesFilter}
        key={tutor._id}
        tutor={tutor}
      />
    );
  });

  if (tutors.length == 0) return <div>Loading...</div>;

  return (
    <div className={TutorsListCSS.filterTutorsPageContainer}>
      <FilterBar
        tutorItems={tutors}
        setPriceFilter={setPriceFilter}
        setSpokenLanguagesFilter={setSpokenLanguagesFilter}
      />
      <div className={TutorsListCSS.tutorsGrid}>{tutorItems}</div>
    </div>
  );
};

export default TutorsList;
