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
    }

  }
})

export const { setContent, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
