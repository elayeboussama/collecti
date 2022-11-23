import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://dummyjson.com/",
  //   credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   headers.set("Authorization", `Bearer ${token}`);
    // }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["admins"],
  endpoints: (builder) => ({}),
});
