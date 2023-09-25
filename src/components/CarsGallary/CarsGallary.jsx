import { useLocation } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectFilteredCars,
  selectFilteredLikes,
  selectIsLoading,
  selectPage,
  selectSomeCars,
} from '../../redux/cars/carsSelectors';
import { CarsList, LoadMoreBtn, PlaceHolder } from './CarsGallary.styled';
import { selectLikes } from '../../redux/likes/likesSelectors';
import { useMemo, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { SelectIsFiltered } from '../../redux/filter/filterSelectors';
import { CardsListItems } from '../CardsListItems/CardsListItems';
import { setPage } from '../../redux/cars/carsSlice';

export const CarsGallary = ({ carsList }) => {
  const isLoading = useSelector(selectIsLoading);
  const [carToShow, setCarToShow] = useState(null);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isFavouritePage = pathname.includes('favorites');
  const isHomePage =
    !pathname.includes('favorites') && !pathname.includes('catalog');
  const cars = useSelector(selectCars);
  const someCars = useSelector(selectSomeCars);
  const favouriteCars = useSelector(selectLikes);
  const filteredCars = useSelector(selectFilteredCars);
  const filteredLikes = useSelector(selectFilteredLikes);
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
    if (pathname.includes('favorites') && !isFiltered) {
      return favouriteCars;
    }
    if (pathname.includes('favorites') && isFiltered) {
      return filteredLikes;
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
    filteredLikes,
  ]);

  return (
    <>
      {isLoading && <Loader />}

      <CarsList $isFavouritePage={isFavouritePage}>
        <CardsListItems
          cars={carsList && carsList.length > 0 ? carsList : carsToRender}
          setCarToShow={setCarToShow}
        />

        {isFavouritePage && carsToRender.length === 0 ? (
          <PlaceHolder>
            No cars to show... Change your choise or select your favourite car
            from the catalog.
          </PlaceHolder>
        ) : null}
      </CarsList>

      {page <= totalPages && !isFiltered && !isFavouritePage && !isHomePage ? (
        <LoadMoreBtn type="button" onClick={() => HandleLoadMore(page)}>
          Load more
        </LoadMoreBtn>
      ) : null}
      {isFiltered && carsToRender.length === 0 && !isFavouritePage ? (
        <PlaceHolder>No results... Try something else.</PlaceHolder>
      ) : null}
      {carToShow && <Modal car={carToShow} setCarToShow={setCarToShow}></Modal>}
    </>
  );
};
