import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const organizationSlice = createSlice({
    name: "org",

    reducers: {
        setOrganizations: async(state, action) => {
            state.organizations = action.payload.data;

            // await AsyncStorage.setItem("token", JSON.stringify(token));

            console.log("token from data : ", action.payload.data)
            console.log("token from payload : ", action.payload)
            console.log("token from token : ", action.payload.data)
            console.log("token from message : ", action.payload.message)
        },
        getOrganizations: (state, action) => {
            const user = action.payload.organization;
            state.user = user;
        },


        updateCredentials: async(state, action) => {
            console.log("token from data : ", action.payload.data)
            console.log("token from payload : ", action.payload)
            console.log("token from token : ", action.payload.data.token)
            state.token = action.payload.data.token;
            await AsyncStorage.delItem("token");
        }
    },
});

export const { setOrganizations } = organizationSlice.actions;

export default organizationSlice.reducer;

export const selectOrganizations = (state) => state.organizations;