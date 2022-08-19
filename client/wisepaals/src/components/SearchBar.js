import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  searchCriteriaChanged,
  textSubmitted,
  getCurrentText,
} from "../features/searchBarSlice";
import SearchBarCSS from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  let navigate = useNavigate();
  const currentText = useSelector(getCurrentText);

  const changedSearchCriteria = (value) => {
    dispatch(searchCriteriaChanged(value));
  };

  const submitSearchCriteria = (value) => {
    dispatch(textSubmitted(value));
    navigate("tutors/" + value);
  };

  const dispatch = useDispatch();

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
