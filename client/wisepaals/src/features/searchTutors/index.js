import React from "react";
import SearchBarComponent from "./components/SearchBar";
import searchBarReducerFromSlice, {
  getSubmittedText as getSubmittedTextFromSlice,
  getAllTutors as getAllTutorsFromSlice,
  textSubmitted as textSubmittedFromSlice,
  fetchTeachers as fetchTeacherFromSlice,
} from "./store/searchBarSlice";

export const SearchBar = () => {
  return <SearchBarComponent />;
};

export const getSubmittedText = () => {
  return getSubmittedTextFromSlice;
};

export const getAllTutors = getAllTutorsFromSlice;

export const textSubmitted = textSubmittedFromSlice;

export const searchBarReducer = searchBarReducerFromSlice;
