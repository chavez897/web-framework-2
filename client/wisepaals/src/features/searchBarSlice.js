import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentText: "", submittedText: "" };

export const searchBarSlice = createSlice({
  name: "searchBarText",
  initialState,
  reducers: {
    searchCriteriaChanged: (state, action) => {
      state.currentText = action.payload;
    },
    textSubmitted: (state, action) => {
      state.submittedText = action.payload;
    },
  },
});

export const { searchCriteriaChanged, textSubmitted } = searchBarSlice.actions;

export const getCurrentText = (state) => state.searchBarText.currentText;
export const getSubmittedText = (state) => state.searchBarText.submittedText;

export default searchBarSlice.reducer;
