import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentState: true,
};

const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    toggleSideBar: state => {
      state.currentState = !state.currentState;
    },
  },
});

export const { toggleSideBar } = sideBarSlice.actions;
export const sideBarReducer = sideBarSlice.reducer;
