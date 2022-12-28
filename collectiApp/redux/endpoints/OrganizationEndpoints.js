import { apiSlice } from "../api/apiSlice";

export const orgEndpoints = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrgs: builder.query({
            query: () => ({
                url: "/api/organization/organizations",
                method: "GET",
            }),
            providesTags: ['orgs']
        }),
        getListOrgs: builder.mutation({
            query: (credentials) => ({
                url: "/api/organization/organizations",
                method: "POST",
                body: {...credentials },
            }),
        }),
        getOneOrgs: builder.query({
            query: (credentials) => ({
                url: "/api/organization/organization/" + credentials.id,
                method: "GET",
            }),
        }),
        deleteOneOrgs: builder.mutation({
            query: (credentials) => ({
                url: "/api/organization/delete/" + credentials.id,
                method: "GET",
                // body: {...credentials },
            }),
            invalidatesTags: ['orgs']
        }),
    }),
});

export const {
    useGetAllOrgsQuery,
    useGetListOrgsMutation,
    useGetOneOrgsQuery,
} = orgEndpoints;