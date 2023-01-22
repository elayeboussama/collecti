import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
    name: 'header',
    initialState: {
        pageTitle: "Home",  // current page title state management
        noOfNotifications : 15,  // no of unread notifications
        newNotificationMessage : "",  // message of notification to be shown
        newNotificationStatus : 1,   // to check the notification type -  success/ error/ info
    },
    reducers: {
       

        showNotification: (state, action) => {
            console.log(action)
            state.newNotificationMessage = action.payload.message
            state.newNotificationStatus = action.payload.status
        },
    }
})

export const { setPageTitle, removeNotificationMessage, showNotification } = headerSlice.actions

export default headerSlice.reducer