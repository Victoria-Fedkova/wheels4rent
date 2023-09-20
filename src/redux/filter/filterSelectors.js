import { useSelector } from 'react-redux';

export const selectModels = state => state.filter.filter.model;
export const selectPrice = state => state.filter.filter.price;
export const selectMileageFrom = state => state.filter.filter.mileageFrom;
export const selectMileageTo = state => state.filter.filter.mileageTo;
