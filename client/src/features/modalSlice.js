import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: <></>,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
    closeModal: (state) => {
      document.getElementById('my-modal-4').checked = false;
    },
    openModal: (state) => {
      document.getElementById('my-modal-4').checked = true;
    }

  }
})

export const { setContent, closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
