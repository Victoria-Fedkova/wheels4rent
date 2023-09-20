import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectFilteredCars,
  selectPage,
  selectSomeCars,
} from '../../redux/cars/carsSelectors';
import { CarsList, LoadMoreBtn } from './CarsGallary.styled';
import { selectLikes } from '../../redux/likes/likesSelectors';
import { useMemo, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { SelectIsFiltered } from '../../redux/filter/filterSelectors';
import { CardsListItems } from '../CardsListItems/CardsListItems';
import { setPage } from '../../redux/cars/carsSlice';

export const CarsGallary = () => {
  const [carToShow, setCarToShow] = useState(null);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const cars = useSelector(selectCars);
  const someCars = useSelector(selectSomeCars);
  const favouriteCars = useSelector(selectLikes);
  const filteredCars = useSelector(selectFilteredCars);
  console.log('filteredCars', filteredCars);
  const popularCars = cars
    .filter(car => car.popular >= 0)
    .sort((p1, p2) => (p1.popular <= p2.popular ? 1 : -1))
    .slice(0, 4);
  const isFiltered = useSelector(SelectIsFiltered);

  const page = useSelector(selectPage);
  const totalPages = Math.round(cars.length / 8);

  const HandleLoadMore = page => {
    const nextPage = page + 1;
    dispatch(setPage(nextPage));
  };

  const carsToRender = useMemo(() => {
    if (pathname.includes('favorites')) {
      return favouriteCars;
    }
    if (pathname.includes('catalog') && isFiltered) {
      return filteredCars;
    }
    if (pathname.includes('catalog') && !isFiltered) {
      return someCars;
    }
    return popularCars;
  }, [
    favouriteCars,
    filteredCars,
    isFiltered,
    pathname,
    popularCars,
    someCars,
  ]);

  return (
    <>
      <CarsList>
        <CardsListItems cars={carsToRender} setCarToShow={setCarToShow} />
      </CarsList>

      {page <= totalPages && !isFiltered && (
        <LoadMoreBtn type="button" onClick={() => HandleLoadMore(page)}>
          Load more
        </LoadMoreBtn>
      )}
      {carToShow && <Modal car={carToShow} setCarToShow={setCarToShow}></Modal>}
    </>
  );
};
