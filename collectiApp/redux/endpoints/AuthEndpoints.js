import { apiSlice } from "../api/apiSlice";

export const authEndpoints = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        credentials: builder.query({
            query: () => ({
                url: "/products",
                method: "GET",
            }),
        }),
        signUp: builder.mutation({
            query: (credentials) => ({
                url: "/api/organization/create",
                method: "POST",
                body: {...credentials },
            }),
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: "/api/organization/login",
                method: "POST",
                body: {...credentials },
            }),
        }),
    }),
});

export const {
    useCredentialsQuery,
    useSignUpMutation,
    useLoginMutation,
} = authEndpoints;