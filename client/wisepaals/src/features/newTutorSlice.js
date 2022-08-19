import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const NEW_TUTOR_URL = "http://localhost:5001/wisepaals/teachers/postoffer";

//First argument: prefix for the generated action type
export const newTutor = createAsyncThunk(
  "tutors/newTutors",
  async (newTutor) => {
    try {
      const response = await axios.post(NEW_TUTOR_URL, newTutor);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

const initialState = {
  tutor: {},
  status: "idle", //'idle' | 'loading'  | 'succeeded' | 'failed'
  error: null,
};

export const getNewTutor = (state) => state.newTutor;
export const getNewTutorRequestStatus = (state) => state.newTutor.status;
export const getNewTutorRequestError = (state) => state.newTutor.error;

export const newTutorSlice = createSlice({
  name: "newTutor",
  initialState,
  //To deal with the actions that were not defined in the reducers section
  extraReducers(builder) {
    builder
      .addCase(newTutor.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(newTutor.fulfilled, (state, action) => {
        state.status = "succeeded";
        //state.tutors = action.payload;
      })
      .addCase(newTutor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default newTutorSlice.reducer;
