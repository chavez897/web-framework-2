import { createSlice } from "@reduxjs/toolkit";
import fetchTeachers from "../../../services/fetchTeachersService.ts";

interface SearchBarState {
  currentText: string;
  submittedText: string;
  tutors: [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SearchBarState = {
  currentText: "",
  submittedText: "",
  tutors: [],
  status: "idle", //'idle' | 'loading'  | 'succeeded' | 'failed'
  error: null,
};

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    searchCriteriaChanged: (state, action) => {
      state.currentText = action.payload;
    },
    textSubmitted: (state, action) => {
      state.submittedText = action.payload;
    },
  },
  //To deal with the actions that were not defined in the reducers section
  extraReducers(builder) {
    builder
      .addCase(fetchTeachers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.tutors = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { searchCriteriaChanged, textSubmitted } = searchBarSlice.actions;

export const getCurrentText = (state: SearchBarState) =>
  state.searchBar.currentText;
export const getSubmittedText = (state: SearchBarState) =>
  state.searchBar.submittedText;

export const getAllTutors = (state: SearchBarState) => {
  return state.searchBar.tutors;
};
export const getTutorsRequestStatus = (state: SearchBarState) =>
  state.tutors.status;
export const getTutorsRequestError = (state: SearchBarState) =>
  state.tutors.error;

export default searchBarSlice.reducer;
