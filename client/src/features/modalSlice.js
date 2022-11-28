import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: <></>,
  isShowing: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    }
  }
})

export const { setContent } = modalSlice.actions;

export default modalSlice.reducer;
