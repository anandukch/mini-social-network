import { createAsyncThunk, AsyncThunkOptions } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
// import { register } from "../../apis";
import { AppDispatch } from "../../store/store";

// export const registerUser = (user: User) => async (dispatch: AppDispatch) => {
//   try {
//     const res = await axios.post("/api/users", user);
//     dispatch(login());
//   } catch (err) {
//     console.log(err);
//   }
// }

interface PayloadI{
  email:string,
  password:string
}
export const registerUser = createAsyncThunk<any,any>(
  "auth/register",
  async (payload:PayloadI,thunkApi) => {
    try {
      // const { data }: AxiosResponse = await register(payload);
      
      localStorage.setItem("auth", "data.userToken");
      return "data";
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return thunkApi.rejectWithValue(error.response.data.message);
      } else {
        return thunkApi.rejectWithValue(error.message);
      }
    } 
  }
);

export const registerUserOptions: AsyncThunkOptions = {
  condition: (payload, { getState }) => {
    const { auth } = getState() as any;
    if (auth.isAuthenticated) {
      return false;
    }
  },
};
// use registerUserOptions in the slice
// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state) => {
//       state.isAuthenticated = true
//     }
//   },
//   extraReducers:{
//     [registerUser.fulfilled.type]: (state, action) => {

//use the above options in the slice
// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state) => {
//       state.isAuthenticated = true
//     }
//   },
//   extraReducers:{
//     [registerUser.fulfilled.type]: (state, action) => {
//       state.isAuthenticated = true
//     }
//   }
// })

// export const loginUser = (user: User) => async (dispatch: AppDispatch) => {
//   try {
//     const res = await axios.post("/api/auth", user);
//     dispatch(login());
//   } catch (err) {
//     console.log(err);
//   }
// };
