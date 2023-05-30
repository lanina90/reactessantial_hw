import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setAuth } from './PrivateRouteSlice';



export const confirmAge = createAsyncThunk(
  'modal/confirmAge',
  async (_, { dispatch }) => {
    dispatch(setModalOpen(false));
    localStorage.setItem('isOver18', JSON.stringify(true));
    dispatch(setAuth(true));
  }
);

export const cancelAgeConfirmation = createAsyncThunk(
  'modal/cancelAgeConfirmation',
  async (_, { dispatch }) => {
    dispatch(setModalOpen(false));
    localStorage.setItem('isOver18', JSON.stringify(false));
    dispatch(setAuth(false));
  }
);

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isOpen: false },
  reducers: {
    setModalOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setModalOpen } = modalSlice.actions;

export default modalSlice.reducer;