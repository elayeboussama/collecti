import { apiSlice } from "../features/apiSlice";

export const apiEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    credentials: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getEvent: builder.query({
      query: (id) => ({
        url: `/api/event/event/${id}`,
        method: "GET",
      }),
      providesTags: ["events"],
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/api/organization/create",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/organization/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),

    orgDetails: builder.query({
      query: (id) => ({
        url: `/api/organization/${id}`,
        method: "GET",
      }),
      providesTags: ["orgs"],
    }),

    getOrgnizations: builder.query({
      query: () => ({
        url: "/api/organization/organizations",
        method: "GET",
      }),
      providesTags: ["orgs"],
    }),

    getAllEvents: builder.query({
      query: () => ({
        url: "/api/event/events",
        method: "GET",
      }),
      providesTags: ["events"],
    }),

    payment: builder.mutation({
      query: (credentials) => ({
        url: "/api/stripe/create-checkout-session",
        method: "POST",
        body: { ...credentials },
        invalidatesTags: ["events"],
      }),
    }),

    subscribe: builder.mutation({
      query: (credentials) => ({
        url: "/api/news",
        method: "POST",
        body: { ...credentials },
      })
    }),
    createEvent: builder.mutation({
      query: (credentials) => ({
        url: "/api/event/create",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["events", "orgs"],
    }),
    updateOrganization: builder.mutation({
      query: (credentials) => ({
        url: "/api/organization/update",
        method: "POST",
        body: { ...credentials },
        invalidatesTags: ["orgs"],
      }),
    }),
    updateStatus: builder.mutation({
      query: (credentials) => ({
        url: "/api/organization/updateStatus",
        method: "POST",
        body: { ...credentials },
        invalidatesTags: ["orgs"],
      }),
    }),
    updateEventStatus: builder.mutation({
      query: (credentials) => ({
        url: "/api/event/updateStatus",
        method: "POST",
        body: { ...credentials },
        invalidatesTags: ["events"],
      }),
    }),
    donateEvent: builder.mutation({
      query: (credentials) => ({
        url: "/api/event/donate",
        method: "POST",
        body: { ...credentials },
        invalidatesTags: ["orgs"],
      }),
    }),
    getDonations: builder.query({
      query: () => ({
        url: "/api/donate/gettAll",
        method: "GET",
      }),
      providesTags: ["donations"],
    }),
  }),
});

export const {
  useCredentialsQuery,
  useRegisterMutation,
  useLoginMutation,
  usePaymentMutation,
  useOrgDetailsQuery,
  useGetEventQuery,
  useGetAllEventsQuery,
  useGetOrgnizationsQuery,
  useSubscribeMutation,
  useUpdateOrganizationMutation,
  useCreateEventMutation,
  useDonateEventMutation,
  useUpdateStatusMutation,
  useGetDonationsQuery,
  useUpdateEventStatusMutation,
} = apiEndpoints