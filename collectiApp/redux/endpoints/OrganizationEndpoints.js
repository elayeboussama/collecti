import { apiSlice, apiSliceWithToken } from "../api/apiSlice";

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

        UploadImage: builder.mutation({
            query: (credentials) => ({
                url: "/api/organization/upload",
                method: "POST",
                body: credentials.body,
                headers: credentials.headers
            }),
        }),

        UpdateOrg: builder.mutation({
            query: (credentials) => ({
                url: "/api/organization/update",
                method: "POST",
                body: {...credentials },
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
                invalidatesTags: ['user', 'orgs']
            }),
        }),
    }),
});

export const {
    useGetAllOrgsQuery,
    useGetListOrgsMutation,
    useUploadImageMutation,
    useGetOneOrgsQuery,
} = orgEndpoints;


export const {
    useUpdateOrgMutation,
} = orgWithTokenEndpoints;