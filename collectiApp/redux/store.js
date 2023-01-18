import { configureStore } from "@reduxjs/toolkit/";
import { apiSlice, apiSliceWithToken } from "./api/apiSlice";
import authReducer from "./slicers/AuthSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [apiSliceWithToken.reducerPath]: apiSliceWithToken.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: true,
});
