import { createSlice } from '@reduxjs/toolkit';
import { updateCar, fetchCars } from './carsOperations';
import {
  createStatus,
  handleUpdate,
  handleFetch,
  handleFulfilled,
  handlePending,
  handleRejected,
} from './carsHandlers';

const STATUSES = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

const contactsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    const { PENDING, REJECTED, FULFILLED } = STATUSES;
    builder
      .addCase(fetchCars.fulfilled, handleFetch)
      .addCase(updateCar.fulfilled, handleUpdate)
      .addMatcher(createStatus(PENDING), handlePending)
      .addMatcher(createStatus(REJECTED), handleRejected)
      .addMatcher(createStatus(FULFILLED), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
