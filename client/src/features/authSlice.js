import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        userId: null,
        token: null,
        user: {
            username: null,
            userEmail: null,
            phone: null,
            description: null,
            keywords: [],
            logo: null,
            cover: null,
            userEvents: [],
            firstConnection: true,
        }
    },
    reducers: {
        setCredentials: (state, action) => {
            const token = action.payload.data.token;
            const user = action.payload.data.organization;
            const id = action.payload.data.organization._id;

            state.userId = id;
            state.token = token;
            state.user = { ...user, }
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        },
        updateCredentials: (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload));
            console.log(action.payload)
            state.user = { ...state.user, ...action.payload }
        },

        checkToken: (state) => {
            const token = localStorage.getItem("token");
            const user = JSON.parse(localStorage.getItem("user"));
            if (token) {
                state.userId = user._id;
                state.token = token;
                state.user = { user, ...user }
            }
        },
        logout: (state) => {
            toast.success("Goodbye for now! 💔")
            state.userId = null;
            state.token = null;
            state.user = {}
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
    }
})

export const { setCredentials, checkToken, logout, updateCredentials } = authSlice.actions;

export default authSlice.reducer;