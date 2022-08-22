import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentText: "",
  submittedText: "",
  tutors: [],
  status: "idle", //'idle' | 'loading'  | 'succeeded' | 'failed'
  error: null,
};
const FILTER_TUTORS_URL = "http://localhost:5001/api/v1/tutors";

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

//First argument: prefix for the generated action type
export const fetchTeachers = createAsyncThunk(
  "tutors/fetchTutors",
  async (skill) => {
    try {
      const response = await axios.get(FILTER_TUTORS_URL + "?skill=" + skill, {
        headers: { Accept: "application/json" },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

export const { searchCriteriaChanged, textSubmitted } = searchBarSlice.actions;

export const getCurrentText = (state) => state.searchBar.currentText;
export const getSubmittedText = (state) => state.searchBar.submittedText;

export const getAllTutors = (state) => {
  return state.searchBar.tutors;
};
export const getTutorsRequestStatus = (state) => state.tutors.status;
export const getTutorsRequestError = (state) => state.tutors.error;

export default searchBarSlice.reducer;
