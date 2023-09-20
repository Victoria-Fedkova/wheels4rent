import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: { model: [], price: '', mileageFrom: 0, mileageTo: 0 },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
