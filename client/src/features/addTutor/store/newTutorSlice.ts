
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addTutorService } from "../services/addTutor.ts";

interface newTutorState {
  tutor: any;
  status: string; //'idle' | 'loading'  | 'succeeded' | 'failed'
  error: any;
}

const initialState: newTutorState = {
  tutor: {},
  status: "idle", //'idle' | 'loading'  | 'succeeded' | 'failed'
  error: null,
};

export const getNewTutor = (state: any) => state.newTutor;
export const getNewTutorRequestStatus = (state: any) =>
  state.newTutor.status;
export const getNewTutorRequestError = (state: any) =>
  state.newTutor.error;

export const newTutorSlice = createSlice({
  name: "newTutor",
  initialState,
  //To deal with the actions that were not defined in the reducers section
  extraReducers(builder) {
    builder
      .addCase(addTutorService.pending, (state: newTutorState, action: PayloadAction<any>) => {
        state.status = "loading";
      })
      .addCase(addTutorService.fulfilled, (state: newTutorState, action: PayloadAction<any>) => {
        state.status = "succeeded";
        //state.tutors = action.payload;
      })
      .addCase(addTutorService.rejected, (state: newTutorState, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default newTutorSlice.reducer;