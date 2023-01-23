import AsyncStorage from "@react-native-async-storage/async-storage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.1.18:8080",
  prepareHeaders: async (headers, { getState }) => {
    const token = await AsyncStorage.getItem("token");
    console.log("api => ", token);
    if (token) {
      console.log("condition", token);
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
  //   credentials: "include",
});

const baseQueryWithToken = fetchBaseQuery({
  baseUrl: "http://192.168.1.18:8080",
  //   credentials: "include",
  prepareHeaders: async (headers, { getState }) => {
    const token = await AsyncStorage.getItem("token");
    console.log("api => ", token);
    if (token) {
      console.log("condition", token);
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["admins", "orgs", "event"],
  endpoints: (builder) => ({}),
});

export const apiSliceWithToken = createApi({
  baseQuery: baseQueryWithToken,
  tagTypes: ["admins", "orgs", "event"],
  endpoints: (builder) => ({}),
});
