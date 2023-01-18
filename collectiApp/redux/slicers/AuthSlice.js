import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authSlice = createSlice({
  name: "auth",
  initialState: { user_id: null, token: null, user_name: null },
  reducers: {
    setCredentials: async (state, action) => {
      const token = action.payload.data.token;
      const id = action.payload.data.organization._id;
      const name = action.payload.data.organization.name;
      state.user_id = id;
      state.name = name;
      state.token = token;
      console.log("slice", state.token);
      console.log("slice user id", state.user_id);
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("user_id", id);
      await AsyncStorage.setItem("name", name);
    },
    getCredentials: (state, action) => {
      const user = action.payload.organization;
      state.user = user;
    },
  },
});

export const { setCredentials, getCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user_id;
export const selectCurrentToken = (state) => state.auth.token;
