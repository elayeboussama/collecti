import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const token = action.payload.token;
      state.token = token;
      localStorage.setItem("token", token);
    },
    getCredentials: (state, action) => {
      const user = action.payload;
      state.user = user;
    },
  },
});

export const { setCredentials, getCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
