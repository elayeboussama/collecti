import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: async(state, action) => {
            const token = action.payload.data.token;
            state.token = action.payload.data.token;

            AsyncStorage.setItem("token", JSON.stringify(token));

            console.log("token from data : ", action.payload.data)
            console.log("token from payload : ", action.payload)
            console.log("token from token : ", action.payload.data.token)
            console.log("token from message : ", action.payload.message)
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