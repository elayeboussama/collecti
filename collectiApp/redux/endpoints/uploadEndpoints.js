import { apiSlice } from "../api/apiSlice";

export const uploadEndpoints = apiSlice.injectEndpoints({
    endpoints: (builder) => ({


        UploadImage: builder.mutation({
            query: (credentials) => ({
                url: "/api/organization/upload",
                method: "POST",
                body: credentials.body,
                headers: credentials.headers
            }),
        }),


    }),
});

export const {
    useUploadImageMutation,
} = uploadEndpoints;