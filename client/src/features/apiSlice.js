import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8080",
    prepareHeaders: async (headers, { getState, endpoint }) => {
        const token = localStorage.getItem("token");
        if (token && (endpoint === "createEvent" || endpoint === "updateOrganization")) {
            console.log(endpoint)
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
})

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQuery,
    tagTypes: ["events", "orgs"],
    endpoints: (builder) => ({})
})