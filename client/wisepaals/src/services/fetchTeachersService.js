import axios from "../lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const FILTER_TUTORS_PATH = "/api/v1/tutors";

//First argument: prefix for the generated action type
//Generates action that will be taken by the SearchBar extra reducers
export default createAsyncThunk("tutors/fetchTutors", async (skill) => {
  try {
    const response = await axios.get(FILTER_TUTORS_PATH + "?skill=" + skill);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});
