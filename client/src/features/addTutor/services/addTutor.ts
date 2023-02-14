import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../lib/axios.ts";
import { API_ENDPOINTS } from "../../../utils/apiEndpoints.ts";

//First argument: prefix for the generated action type
export const addTutorService = createAsyncThunk<any, any>(
  "tutors/newTutors",
  async (newTutor) => {
    try {
      const response = await axios.post(API_ENDPOINTS.TUTORS, newTutor);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);