import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: async(state, action) => {
            const token = action.payload.token;
            state.token = token;
            AsyncStorage.setItem("token", JSON.stringify(token));
        },
        getCredentials: (state, action) => {
            const user = action.payload.organization;
            state.user = user;
        },
    },
});

export const { setCredentials, getCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;