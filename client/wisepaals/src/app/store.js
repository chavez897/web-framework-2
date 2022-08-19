import { configureStore } from "@reduxjs/toolkit";
import searchBar from "../features/searchBarSlice";
import newTutor from "../features/newTutorSlice";

export const store = configureStore({
  reducer: { searchBar, newTutor },
});
