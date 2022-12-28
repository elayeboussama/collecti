import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://192.168.56.1:8080",
    //   credentials: "include",

});

const baseQueryWithToken = fetchBaseQuery({
    baseUrl: "http://192.168.56.1:8080",
    //   credentials: "include",
    prepareHeaders: async(headers, { getState }) => {
        const token = await AsyncStorage.getItem("token");
        console.log("api => ", token);
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    }
});

export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ["admins", "orgs"],
    endpoints: (builder) => ({}),
});


export const apiSliceWithToken = createApi({
    baseQuery: baseQueryWithToken,
    tagTypes: ["admins", "orgs"],
    endpoints: (builder) => ({}),
});