import { apiSlice, apiSliceWithToken } from "../api/apiSlice";

export const eventEndpoints = apiSliceWithToken.injectEndpoints({
    endpoints: (builder) => ({
        getAllEvents: builder.query({
            query: () => ({
                url: "/api/event/getAll",
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

export const { useAddEventMutation, useGetAllEventsQuery } = eventEndpoints;