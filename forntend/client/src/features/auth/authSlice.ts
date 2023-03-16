import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUser } from "./authActions";

export interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("auth");
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(action.payload);

      state.isAuthenticated = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isAuthenticated = false;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
