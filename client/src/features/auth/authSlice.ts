import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUser } from "./authActions";


const userToken = localStorage.getItem('auth')
  ? localStorage.getItem('auth')
  : null
export interface AuthState {
  data:any,
  userToken: string | null;
  isAuthenticated: boolean;
  hasError: boolean;
}

const initialState: AuthState = {
  data:{},
  userToken,
  isAuthenticated: false,
  hasError: false,

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
      state.data = action.payload.user;
      state.userToken = action.payload.token;
      state.isAuthenticated = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.data={};
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
