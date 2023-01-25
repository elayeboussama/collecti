import { apiSlice, apiSliceWithToken } from "../api/apiSlice";

export const orgEndpoints = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getListOrgs: builder.mutation({
            query: (credentials) => ({
                url: "/api/organization/organizations",
                method: "POST",
                body: {...credentials },
            }),
        }),


        deleteOneOrgs: builder.mutation({
            query: (credentials) => ({
                url: "/api/organization/delete/" + credentials.id,
                method: "GET",
                // body: {...credentials },
            }),
            invalidatesTags: ["orgs"],
        }),

        UploadImage: builder.mutation({
            query: (credentials) => ({
                url: "/api/organization/upload",
                method: "POST",
                body: credentials.body,
                headers: credentials.headers,
            }),
        }),
        EditOrg: builder.mutation({
            query: (credentials) => ({
                url: "/api/organization/update",
                method: "POST",
                body: {...credentials },
                invalidatesTags: ["user", "orgs"],
            }),
        }),
    }),
});

export const orgWithTokenEndpoints = apiSliceWithToken.injectEndpoints({
    endpoints: (builder) => ({
        UpdateOrg: builder.mutation({
            query: (credentials) => ({
                url: "/api/organization/update",
                method: "POST",
                body: {...credentials },
                invalidatesTags: ["user", "orgs"],
            }),
        }),
        GetAllOrgs: builder.query({
            query: () => ({
                url: "/api/organization/organizations",
                method: "GET",
            }),
        }),
        getOneOrgs: builder.query({
            // query: (credentials) => ({
            //     url: "/api/organization/" + credentials.id,
            //     method: "GET",
            // }),
            query: (credentials) => ({
                url: `/api/organization/${id}`,
                method: "GET",
                params: { id: credentials.id },
            }),
        }),
    }),
});

export const {
    useGetListOrgsMutation,

    useDeleteOneOrgsMutation,
    useUploadImageMutation,
    useEditOrgMutation,
} = orgEndpoints;

export const { useUpdateOrgMutation, useGetAllOrgsQuery, useGetOneOrgsQuery } =
orgWithTokenEndpoints;