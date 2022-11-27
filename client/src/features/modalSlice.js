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
    },
    hideModal: (state) => {
      state.content = <></>;
      state.isShowing = false;
    }
  }
})

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
