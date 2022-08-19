import { configureStore } from "@reduxjs/toolkit";
import searchBarText from "../features/searchBarSlice";
import tutors from "../features/availableTeachersSlice";
import newTutor from "../features/newTutorSlice";

export const store = configureStore({
  reducer: { searchBarText, tutors, newTutor },
});
