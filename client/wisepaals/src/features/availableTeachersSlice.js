import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const FILTER_TUTORS_URL = "http://localhost:5001/api/v1/tutors";

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

const initialState = {
  tutors: [],
  status: "idle", //'idle' | 'loading'  | 'succeeded' | 'failed'
  error: null,
};

export const getAllTutors = (state) => state.tutors;
export const getTutorsRequestStatus = (state) => state.tutors.status;
export const getTutorsRequestError = (state) => state.tutors.error;

export const availableTeachersSlice = createSlice({
  name: "tutors",
  initialState,
  //To deal with the actions that were not defined in the reducers section
  extraReducers(builder) {
    builder
      .addCase(fetchTeachers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tutors = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default availableTeachersSlice.reducer;
