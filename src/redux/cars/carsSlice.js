import { createSlice } from '@reduxjs/toolkit';
import { updateCar, fetchCars, fetchSomeCars } from './carsOperations';
import {
  createStatus,
  handleUpdate,
  handleFetch,
  handleFulfilled,
  handlePending,
  handleRejected,
  handleFetchSome,
} from './carsHandlers';

const STATUSES = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: { cars: [], someCars: [], page: 1 },
    isLoading: false,
    error: null,
  },
  reducers: {
    setPage(state, action) {
      state.cars.page = action.payload;
    },
  },
  extraReducers: builder => {
    const { PENDING, REJECTED, FULFILLED } = STATUSES;
    builder
      .addCase(fetchCars.fulfilled, handleFetch)
      .addCase(fetchSomeCars.fulfilled, handleFetchSome)
      .addCase(updateCar.fulfilled, handleUpdate)
      .addMatcher(createStatus(PENDING), handlePending)
      .addMatcher(createStatus(REJECTED), handleRejected)
      .addMatcher(createStatus(FULFILLED), handleFulfilled);
  },
});

export const carsReducer = carsSlice.reducer;
export const { setPage } = carsSlice.actions;
