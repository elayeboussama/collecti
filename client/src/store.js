import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/apiSlice'
import authReducer from './features/authSlice'
import modalReducer from './features/modalSlice'
import ConffetiReducer from './features/conffetiSlice'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        conffeti: ConffetiReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(apiSlice.middleware)
})