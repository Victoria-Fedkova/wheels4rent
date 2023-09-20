import { CarCard } from '../CarCard/CarCard';

export const CardsListItems = ({ cars, setCarToShow }) => {
  return (
    cars.length > 0 &&
    cars.map(car => {
      return <CarCard key={car.id} car={car} setCarToShow={setCarToShow} />;
    })
  );
};
