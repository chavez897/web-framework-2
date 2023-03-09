import { configureStore } from "@reduxjs/toolkit";
import { searchBarReducer as searchBar } from "./features/searchTutors/index";
import tutorSlice from "./features/addTutor/store/tutorSlice";
import { authenticationReducer as session } from "./features/authentication/index";

interface RootState {
  searchBar: ReturnType<typeof searchBar>;
  tutorSlice: ReturnType<typeof tutorSlice>;
  session: ReturnType<typeof session>;
}

export const store = configureStore<RootState>({
  reducer: { searchBar, newTutor, tutorSlice, session}
});