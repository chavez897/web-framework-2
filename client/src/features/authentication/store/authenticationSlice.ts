import { createSlice } from "@reduxjs/toolkit";

interface AuthenticationState {
    email: string;
    password: string;
    accessToken: string;
    roles: [string];
  }
  
  const initialState: AuthenticationState = {
    email: "",
    password: "",
    accessToken: "",
    roles: [""],
  };

export const authenticationSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.accessToken = action.payload.accessToken;
            state.roles = action.payload.roles;
        }
    }
});

//Export the actions
export const { login } = authenticationSlice.actions;

//Export by default the reducer
export default authenticationSlice.reducer;
