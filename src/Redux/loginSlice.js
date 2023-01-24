import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  authenticated: false,
  user: null,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.authenticated = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setEmail, setPassword, setAuthenticated, setUser, setError } = loginSlice.actions;

export default loginSlice.reducer;
