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
        params: { id: id },
      }),
    }),
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
  }),
});


export const {
  useCredentialsQuery,
  useRegisterMutation,
  useLoginMutation,
  useOrgDetailsQuery,
  useGetEventQuery,
} = authEndpoints;

export const {
  useCreateEventMutation,
} = authEndpointsWithToken;













// updateOrganization: builder.mutation({
//   query: (credentials) => ({
//     url: "/api/organization/update",
//     method: "POST",
//     body: { ...credentials },
//   }),
// }),  useUpdateOrganizationMutation,
