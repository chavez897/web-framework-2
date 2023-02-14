import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  searchCriteriaChanged,
  textSubmitted,
  getCurrentText,
} from "../store/searchBarSlice.ts";
import SearchBarCSS from "../assets/SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import fetchTeachers from "../../../services/fetchTeachersService.ts";

const SearchBar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const currentText = useSelector(getCurrentText);

  const changedSearchCriteria = (value: string) => {
    dispatch(searchCriteriaChanged(value));
  };

  const { skill } = useParams();
  const submitSearchCriteria = (value: string) => {
    dispatch(textSubmitted(value));
    dispatch(fetchTeachers(value));

    if (skill !== value) navigate("tutors/" + value);
  };

  return (
    <div className={SearchBarCSS.searchBarContainer}>
      <form
        className={SearchBarCSS.searchBar}
        onSubmit={(e) => {
          e.preventDefault();
          submitSearchCriteria(e.target[0].value);
        }}
      >
        <input
          type="text"
          value={currentText}
          placeholder="What do you want to learn?"
          onChange={(e) => changedSearchCriteria(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
