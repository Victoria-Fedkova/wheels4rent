import { fetchCars, updateCar } from './carsOperations';

import { isAnyOf } from '@reduxjs/toolkit';

export const handlePending = state => {
  state.isLoading = true;
};
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const handleFetch = (state, action) => {
  state.items = action.payload;
};

export const handleUpdate = (state, { payload }) => {
  const updateCarIndex = state.cars.findIndex(car => car.id === payload.id); // check

  if (updateCarIndex >= 0) {
    state.cars[updateCarIndex] = {
      ...state.cars[updateCarIndex],
      ...payload.cars,
    };
  }
  state.isLoading = false;
  state.error = null;
};

const arrThunks = [fetchCars, updateCar];
export const createStatus = type => isAnyOf(...arrThunks.map(el => el[type]));
