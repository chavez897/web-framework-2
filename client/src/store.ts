import { configureStore } from "@reduxjs/toolkit";
import { searchBarReducer as searchBar } from "./features/searchTutors/index";
import tutorSlice from "./features/addTutor/store/tutorSlice";

interface RootState {
  searchBar: ReturnType<typeof searchBar>;
  tutorSlice: ReturnType<typeof tutorSlice>;
}

export const store = configureStore<RootState>({
  reducer: { searchBar, tutorSlice}
});