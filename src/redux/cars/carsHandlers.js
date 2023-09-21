import { fetchCars, fetchSomeCars, updateCar } from './carsOperations';

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
  state.cars.cars = action.payload;
};
export const handleFetchSome = (state, action) => {
  state.cars.someCars.push(...action.payload);
};

export const handleUpdate = (state, { payload }) => {
  const updateCarIndex = state.cars.cars.findIndex(
    car => car.id === payload.id
  );

  if (updateCarIndex >= 0) {
    state.cars[updateCarIndex] = {
      ...state.cars[updateCarIndex],
      ...payload,
    };
  }
  state.isLoading = false;
  state.error = null;
};

const arrThunks = [fetchCars, fetchSomeCars];
export const createStatus = type => isAnyOf(...arrThunks.map(el => el[type]));
