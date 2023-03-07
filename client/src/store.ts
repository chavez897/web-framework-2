import { configureStore } from "@reduxjs/toolkit";
import { searchBarReducer as searchBar } from "./features/searchTutors/index";
import { newTutorReducer as newTutor } from "./features/addTutor/index";
import tutorSlice from "./features/addTutor/store/tutorSlice";

interface RootState {
  searchBar: ReturnType<typeof searchBar>;
  newTutor: ReturnType<typeof newTutor>;
  tutorSlice: ReturnType<typeof tutorSlice>;
}

export const store = configureStore<RootState>({
  reducer: { searchBar, newTutor, tutorSlice}
});