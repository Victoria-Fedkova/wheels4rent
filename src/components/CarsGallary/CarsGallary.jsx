import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars/carsSelectors';
import { CarCard } from '../CarCard/CarCard';
import { CarsList } from './CarsGallary.styled';
import { selectLikes } from '../../redux/likes/likesSelectors';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';

export const CarsGallary = () => {
  const [carToShow, setCarToShow] = useState(null);

  const { pathname } = useLocation();
  const cars = useSelector(selectCars);
  const favouriteCars = useSelector(selectLikes);

  const popularCars = cars
    .filter(car => car.popular >= 0)
    .sort((p1, p2) => (p1.popular <= p2.popular ? 1 : -1))
    .slice(0, 4);

  if (pathname.includes('favorites')) {
    return (
      <>
        <ul>
          {favouriteCars.map(car => {
            return (
              <CarCard key={car.id} car={car} setCarToShow={setCarToShow} />
            );
          })}
        </ul>
        {carToShow && (
          <Modal car={carToShow} setCarToShow={setCarToShow}></Modal>
        )}
      </>
    );
  }

  return (
    <>
      <CarsList>
        {popularCars.map(car => {
          return <CarCard key={car.id} car={car} setCarToShow={setCarToShow} />;
        })}
      </CarsList>
      {carToShow && <Modal car={carToShow} setCarToShow={setCarToShow}></Modal>}
    </>
  );
};
