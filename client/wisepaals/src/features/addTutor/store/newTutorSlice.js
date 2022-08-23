import { createSlice } from "@reduxjs/toolkit";
import { addTutorService } from "../services/addTutor";

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
      .addCase(addTutorService.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addTutorService.fulfilled, (state, action) => {
        state.status = "succeeded";
        //state.tutors = action.payload;
      })
      .addCase(addTutorService.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default newTutorSlice.reducer;
