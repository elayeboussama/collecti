import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8080"
})

const baseQueryWithToken = fetchBaseQuery({
    baseUrl: "http://localhost:8080",
    prepareHeaders: async (headers, { getState }) => {
        const token = localStorage.getItem("token");
        console.log("api => ", token);
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
})

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: (builder) => ({})
})

export const apiSliceWithToken = createApi({
    baseQuery: baseQueryWithToken,
    endpoints: (builder) => ({})
})
