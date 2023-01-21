import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8080",
})

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQuery,
    tagTypes: ["events", "orgs"],
    endpoints: (builder) => ({})
})