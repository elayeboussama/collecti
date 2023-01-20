import { apiSlice, apiSliceWithToken } from "../features/apiSlice";

export const authEndpoints = apiSlice.injectEndpoints({
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
    }),

    getOrgnizations: builder.query({
      query: () => ({
        url: "/api/organization/organizations",
        method: "GET",
      }),
    }),

    getAllEvents: builder.query({
      query: () => ({
        url: "/api/event/events",
        method: "GET",
      }),
      // providesTags: ['orgs']
    }),

    payment: builder.mutation({
      query: (credentials) => ({
        url: "/api/stripe/create-checkout-session",
        method: "POST",
        body: { ...credentials },
      }),
    }),

    subscribe: builder.mutation({
      query: (credentials) => ({
        url: "/api/news",
        method: "POST",
        body: { ...credentials },
      })
    })
  }),
});

export const authEndpointsWithToken = apiSliceWithToken.injectEndpoints({
  endpoints: (builder) => ({
    createEvent: builder.mutation({
      query: (credentials) => ({
        url: "/api/event/create",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    updateOrganization: builder.mutation({
      query: (credentials) => ({
        url: "/api/organization/update",
        method: "POST",
        body: { ...credentials },
      }),
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
} = authEndpoints;

export const {
  useUpdateOrganizationMutation,
  useCreateEventMutation,
} = authEndpointsWithToken;













