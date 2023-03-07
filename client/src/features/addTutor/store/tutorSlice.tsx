import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../../lib/axios";
import { API_ENDPOINTS } from "../../../utils/apiEndpoints";

interface AddTutorArgs {
  values: {
    image: File;
    userId: string;
    description: string;
    spokenLanguages: string[];
    skills: string[];
    hourlyRate: number;
  };
}

interface TutorState {
  tutor: any;
  loading: boolean;
  error: string | null;
}

export const addTutor = createAsyncThunk(
    "post/addTutor",
    async ({ values }: AddTutorArgs) => {
      const formData = new FormData();
      formData.append("image", values.image);
      formData.append("userId", values.userId);
      formData.append("description", values.description);
      values.spokenLanguages.forEach((language) =>
        formData.append("spokenLanguages", language)
      );
      values.skills.forEach((skill) => formData.append("skills", skill));
      formData.append("hourlyRate", values.hourlyRate.toString());
  
      const response = await axios.post(
        `${API_ENDPOINTS.TUTORS}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    }
  );

const TutorSlice = createSlice({
  name: "tutor",
  initialState: {
    tutor: {},
    loading: false,
    error: null,
  } as TutorState,
  reducers: {},
  extraReducers: {
    [addTutor.pending.type]: (state:TutorState) => {
      state.loading = true;
    },
    [addTutor.fulfilled.type]: (state:TutorState, action: PayloadAction<any>) => {
      state.loading = false;
      state.tutor = action.payload;
      console.log(action.payload);
    },
    [addTutor.rejected.type]: (state:TutorState, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default TutorSlice.reducer;
