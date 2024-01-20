import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state for the slice
const initialState = {
  status: "idle",
  error: null,
};

// send login post request to the backend
export const login = createAsyncThunk("auth/login", async (formData) => {
  // the parameter formData must be object
  // state is just for checking the signup or login condition
  // name does not exits for the login page
  const { email, password } = formData;

  try {
    const res = await axios.post("http://localhost:3001/api/auth/login", {
      email,
      password,
    });
    return res.data;
  } catch (err) {
    throw err.res.data;
  }
});

// sends the signup post request to the backend
export const signUp = createAsyncThunk("auth/signup", async (formData) => {
  const { email, password, name } = formData;

  try {
    const res = await axios.post("http://localhost:3001/api/auth/signup", {
      name,
      email,
      password,
    });
    return res.data;
  } catch (err) {
    throw err.res.data;
  }
});

// handler function for the extraReducer endpoint.s
// for pending state
function pending(state) {
  state.status = "loading";
}

// for fulfilled state
function fulfilled(state, action) {
  state.status = "success";
  console.log(action.payload);
}

// for rejected state
function rejected(state) {
  state.status = "rejected";
}

// creating the slice for the loginSignup
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => pending(state))
      .addCase(signUp.fulfilled, (state, action) => fulfilled(state, action))
      .addCase(signUp.rejected, (state) => rejected(state))
      .addCase(login.pending, (state) => pending(state))
      .addCase(login.fulfilled, (state, action) => fulfilled(state, action))
      .addCase(login.rejected, (state) => rejected(state));
  },
});

export default authSlice.reducer;
