import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isVisible: false,
}

export const conffetiSlice = createSlice({
    name: 'conffeti',
    initialState,
    reducers: {
        setVisible: (state, action) => {
            state.isVisible = action.payload;
        }
    }
})

export const { setVisible } = conffetiSlice.actions;

export default conffetiSlice.reducer;