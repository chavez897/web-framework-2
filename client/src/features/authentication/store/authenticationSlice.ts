import { createSlice } from "@reduxjs/toolkit";

interface AuthenticationState {
    email: string;
    roles: [string];
  }
  
  const initialState: AuthenticationState = {
    email: "",
    roles: [""],
  };

export const authenticationSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload;
        }
    }
});

//Export the actions
export const { login } = authenticationSlice.actions;

//Export by default the reducer
export default authenticationSlice.reducer;
