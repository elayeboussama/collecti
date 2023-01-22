import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiSlice, apiSliceWithToken } from "../api/apiSlice";

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
                // providesTags: ['user']
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

export const {
    useCredentialsQuery,
    useSignUpMutation,
    useLoginMutation,
    useOrgDetailsQuery,
} = authEndpoints;