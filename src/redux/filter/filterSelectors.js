import { createSelector } from '@reduxjs/toolkit';

export const selectModels = state => state.filter.filter.model;
export const selectPrice = state => state.filter.filter.price;
export const selectMileageFrom = state => state.filter.filter.mileageFrom;
export const selectMileageTo = state => state.filter.filter.mileageTo;

export const SelectIsFiltered = createSelector(
  [selectModels, selectPrice, selectMileageFrom, selectMileageTo],
  (model, price, mileageFrom, mileageTo) => {
    return model.length > 0 || !!price || mileageFrom > 0 || mileageTo > 0;
  }
);
