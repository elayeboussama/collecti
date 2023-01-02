import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/apiSlice'
import authReducer from './features/authSlice'
import modalReducer from './features/modalSlice'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(apiSlice.middleware)
})