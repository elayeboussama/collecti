import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        userId: null,
        username: null,
        userEmail: null,
        token: null,
        userEvents: []
    },
    reducers: {
        setCredentials: (state, action) => {
            const token = action.payload.data.token;
            const user = action.payload.data.organization;
            const id = action.payload.data.organization._id;

            state.userId = id;
            state.username = user.name;
            state.userEmail = user.email;
            state.userEvents = user.events;
            state.token = token;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        },
        checkToken: (state) => {
            const token = localStorage.getItem("token");
            const user = JSON.parse(localStorage.getItem("user"));
            if (token) {
                state.userId = user._id;
                state.username = user.name;
                state.userEmail = user.email;
                state.userEvents = user.events;
                state.token = token;
            }
        }
    }
})

export const { setCredentials, checkToken } = authSlice.actions;

export default authSlice.reducer;