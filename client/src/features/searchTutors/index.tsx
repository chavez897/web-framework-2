import React from "react";
import SearchBarComponent from "./components/SearchBar.tsx";
import searchBarReducerFromSlice, {
  getSubmittedText as getSubmittedTextFromSlice,
  getAllTutors as getAllTutorsFromSlice,
  textSubmitted as textSubmittedFromSlice,
  fetchTeachers as fetchTeacherFromSlice,
} from "./store/searchBarSlice.ts";

interface SearchBarProps {
  submittedText: string;
  allTutors: string[];
}

export const SearchBar: React.FC<SearchBarProps> = ({
  submittedText,
  allTutors,
}) => {
  return (
    <SearchBarComponent submittedText={submittedText} allTutors={allTutors} />
  );
};

export const getSubmittedText = () => {
  return getSubmittedTextFromSlice;
};

export const getAllTutors = getAllTutorsFromSlice;

export const textSubmitted = textSubmittedFromSlice;

export const searchBarReducer = searchBarReducerFromSlice;
