import { createSlice } from "@reduxjs/toolkit";

const authUserSlice = createSlice({
  name: "authuser",
  initialState: {
    authuser: null,
  },
  reducers: {
    login(state, action) {
      state.authuser = action.payload;
    },
    logout(state) {
      state.authuser = null;
    },
  },
});

export const { login, logout } = authUserSlice.actions;

export const selectAuthedUser = (state) => state.authuser.authuser;

export default authUserSlice.reducer;
