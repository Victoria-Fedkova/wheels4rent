import { createSelector } from '@reduxjs/toolkit';
import {
  selectMileageFrom,
  selectMileageTo,
  selectModels,
  selectPrice,
} from '../filter/filterSelectors';
import { selectLikes } from '../likes/likesSelectors';

export const selectCars = state => state.cars.cars.cars;
export const selectSomeCars = state => state.cars.cars.someCars;
export const selectPage = state => state.cars.cars.page;

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
      mileageFrom || mileageTo
        ? carsFilteredByPrice.filter(car => {
            if (mileageFrom && mileageTo)
              return car.mileage >= mileageFrom && car.mileage <= mileageTo;
            if (mileageFrom && !mileageTo) return car.mileage >= mileageFrom;
            if (!mileageFrom && mileageTo) return car.mileage <= mileageTo;
          })
        : carsFilteredByPrice;
    return carsFilteredByMileage;
  }
);

export const selectFilteredLikes = createSelector(
  [selectModels, selectPrice, selectLikes],
  (model, price, cars) => {
    const carsFilteredByModel =
      model.length > 0 ? cars.filter(car => model.includes(car.make)) : cars;

    const carsFilteredByPrice = price
      ? carsFilteredByModel.filter(
          car => car.rentalPrice.split('$')[1] <= price
        )
      : carsFilteredByModel;

    return carsFilteredByPrice;
  }
);
