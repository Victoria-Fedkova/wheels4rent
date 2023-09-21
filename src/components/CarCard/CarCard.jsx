import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regHeart } from '@fortawesome/free-regular-svg-icons';

import PropTypes from 'prop-types';
import {
  CarHeader,
  CardWrapper,
  HeaderWrap,
  ImgWrapper,
  PropListFirst,
  PropListSecond,
} from './CarCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectLikes, selectRecent } from '../../redux/likes/likesSelectors';
import { updateCar } from '../../redux/cars/carsOperations';
import { addLike, addRecent, deleteLike } from '../../redux/likes/likesSlice';

export const CarCard = ({ car, setCarToShow }) => {
  const dispatch = useDispatch();

  const favoriteCars = useSelector(selectLikes);
  const currentPopular = car.popular;
  const recenrCars = useSelector(selectRecent);
  const isFavorite = favoriteCars.some(item => car.id === item.id);
  const isPremium = car.description.includes('premium', 'convertible');

  const handleLikeClick = () => {
    if (!isFavorite) {
      dispatch(addLike(car));
      const newPopular = currentPopular + 1;
      dispatch(updateCar({ car, popular: newPopular }));
    } else if (isFavorite) {
      dispatch(deleteLike(car));
      const newPopular = currentPopular - 1;
      dispatch(updateCar({ car, popular: newPopular }));
    }
  };

  const handleDetailsClick = () => {
    setCarToShow(car);
    const newPopular = currentPopular + 1;
    dispatch(updateCar({ car, popular: newPopular }));
    if (!recenrCars.includes(car)) {
      dispatch(addRecent(car));
    }
  };

  return (
    <CardWrapper>
      <ImgWrapper $isfavorite={isFavorite}>
        <img src={car.img} alt={car.make} />
        <button type="button" onClick={handleLikeClick}>
          {isFavorite ? (
            <FontAwesomeIcon icon={solidHeart} />
          ) : (
            <FontAwesomeIcon icon={regHeart} />
          )}
        </button>
      </ImgWrapper>
      <HeaderWrap>
        <CarHeader>
          {car.make}
          {car.make.length + car.model.length <= 12 && (
            <span>{` ${car.model}`}</span>
          )}
          {`, ${car.year}`}
        </CarHeader>
        <p>{car.rentalPrice}</p>
      </HeaderWrap>
      <PropListFirst>
        <li>
          <span>{car.address.split(',')[1]}</span>
        </li>
        <li>
          <span>{car.address.split(',')[2]}</span>
        </li>
        <li>
          <span>{car.rentalCompany}</span>
        </li>

        {isPremium && (
          <li>
            <span>{'Premium'}</span>
          </li>
        )}
      </PropListFirst>

      <PropListSecond>
        <li>
          <span>{car.type.split(',').splice(0, 1).join('')}</span>
        </li>
        <li>
          <span>{car.model.split(' ').splice(0, 2).join(' ')}</span>
        </li>
        <li>
          <span>{car.mileage}</span>
        </li>
        <li>
          <span>{car.accessories[0].split(' ').splice(0, 2).join(' ')}</span>
        </li>
      </PropListSecond>
      <button type="button" onClick={handleDetailsClick}>
        Learn more
      </button>
    </CardWrapper>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string),
    functionalities: PropTypes.arrayOf(PropTypes.string),
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    popular: PropTypes.number.isRequired,
  }),
  setCarToShow: PropTypes.func.isRequired,
};
