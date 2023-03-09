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
  status: string|null;
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
  
      // AXIOS POST REQUEST
      try {
        const response = await axios.post(
          `${API_ENDPOINTS.TUTORS}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return { data: response.data, status: response.status };
      } catch (error: any) {
        const status = error.response.status;
        throw new Error(status);
      }
    }
  );

const TutorSlice = createSlice({
  name: "tutor",
  initialState: {
    tutor: {},
    loading: false,
    error: null,
    status: null,
  } as TutorState,
  reducers: {},
  extraReducers: {
    [addTutor.pending.type]: (state:TutorState) => {
      state.loading = true;
    },
    [addTutor.fulfilled.type]: (state:TutorState, action: PayloadAction<any>) => {
      state.loading = false;
      state.tutor = action.payload;
      state.status = action.payload.status;
    
    },
    [addTutor.rejected.type]: (state:TutorState, action: PayloadAction<any>) => {
      state.loading = false;
      state.status = action.error.message;
    },
  },
});
export default TutorSlice.reducer;
