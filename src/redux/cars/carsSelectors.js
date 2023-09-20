import { createSelector } from '@reduxjs/toolkit';
import {
  selectMileageFrom,
  selectMileageTo,
  selectModels,
  selectPrice,
} from '../filter/filterSelectors';

export const selectCars = state => state.cars.cars;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

export const selectFilteredCars = createSelector(
  [selectModels, selectPrice, selectMileageFrom, selectMileageTo, selectCars],
  (model, price, mileageFrom, mileageTo, cars) => {
    const carsFilteredByModel =
      model.length > 0 ? cars.filter(car => model.includes(car.make)) : cars;

    const carsFilteredByPrice = price
      ? carsFilteredByModel.filter(
          car => car.rentalPrice.split('$')[1] <= price
        )
      : carsFilteredByModel;
    const carsFilteredByMileage =
      mileageFrom | mileageTo
        ? carsFilteredByPrice.filter(
            car => car.mileage >= mileageFrom && car.mileage <= mileageTo
          )
        : carsFilteredByPrice;
    return carsFilteredByMileage;
  }
);
