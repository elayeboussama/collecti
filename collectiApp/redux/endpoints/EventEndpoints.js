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
        getAllOrgs: builder.query({
            query: () => ({
                url: "/api/organization/organizationsMobile",
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

        donate: builder.mutation({
            query: (credentials) => ({
                url: "/api/donate/",
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

export const { useAddEventMutation, useGetAllEventsQuery, useDonateMutation } = eventEndpoints;
export const { useGetAllEventsByOrgMutation } = eventEndpointsWithNoToken;