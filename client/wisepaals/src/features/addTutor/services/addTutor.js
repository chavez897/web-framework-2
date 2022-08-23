import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../lib/axios";

const NEW_TUTOR_PATH = "/wisepaals/teachers/postoffer";

//First argument: prefix for the generated action type
export const addTutorService = createAsyncThunk(
  "tutors/newTutors",
  async (newTutor) => {
    try {
      const response = await axios.post(NEW_TUTOR_PATH, newTutor);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);
