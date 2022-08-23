import { configureStore } from "@reduxjs/toolkit";
import { searchBarReducer as searchBar } from "./features/searchTutors";
import { newTutorReducer as newTutor } from "./features/addTutor";

export const store = configureStore({
  reducer: { searchBar, newTutor },
});
