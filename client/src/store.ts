import { configureStore } from "@reduxjs/toolkit";
import { searchBarReducer as searchBar } from "./features/searchTutors/index";
import { newTutorReducer as newTutor } from "./features/addTutor/index";

interface RootState {
  searchBar: ReturnType<typeof searchBar>;
  newTutor: ReturnType<typeof newTutor>;
}

export const store = configureStore<RootState>({
  reducer: { searchBar, newTutor}
});