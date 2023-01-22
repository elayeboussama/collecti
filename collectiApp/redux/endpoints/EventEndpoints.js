import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiSlice, apiSliceWithToken } from "../api/apiSlice";

export const eventEndpoints = apiSliceWithToken.injectEndpoints({
    endpoints: (builder) => ({
        getAllEvents: builder.query({
            query: () => ({
                url: "/api/event/getAllMobile",
                method: "GET",
            }),
        }),


        addEvent: builder.mutation({
            query: (credentials) => ({
                url: "/api/event/create",
                method: "POST",
                body: {...credentials },
            }),
        }),
    }),
});

export const eventEndpointsWithNoToken = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllEventsByOrg: builder.mutation({
            query: (credentials) => ({
                url: "/api/event/events",
                method: "POST",
                body: {...credentials },
            }),
        }),

    }),
});

export const { useAddEventMutation, useGetAllEventsQuery } = eventEndpoints;
export const { useGetAllEventsByOrgMutation } = eventEndpointsWithNoToken;