import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

const filterInitialState = {
  filter: { model: [], price: '', mileageFrom: '', mileageTo: '' },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
      Notify.info('Great! Look what we got.');
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
