import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: <></>,
  isShowing: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.content = action.payload;
      state.isShowing = true;
      console.log('showModal', state);
    }
  }
})

export const { showModal } = modalSlice.actions;

export default modalSlice.reducer;
