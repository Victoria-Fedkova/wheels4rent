import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {
  CarDetailsWraper,
  ConditionsList,
  PropListF,
  PropListS,
} from './CarDetails.styled';
import { RentalCarBtn } from '../RentalCarBtn/RentalCarBtn';
export const CarDetails = ({ setCarToShow, car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = car;
  const newMileage = new Intl.NumberFormat('en-US').format(mileage);
  const newPrice = `${rentalPrice.slice(1)}$`;
  return (
    <CarDetailsWraper>
      <button onClick={() => setCarToShow(null)}>
        <FontAwesomeIcon icon={faClose} size="2x" />
      </button>
      <img src={img} alt={make} />
      <h2>
        {make} <span>{` ${model}, `}</span>
        {year}
      </h2>
      <PropListF>
        <li>
          <span>{address.split(',')[1]}</span>
        </li>
        <li>
          <span>{address.split(',')[2]}</span>
        </li>
        <li>
          <span>{`Id: ${id}`}</span>
        </li>
        <li>
          <span>{`Type: ${type.split(',').splice(0, 1).join('')}`}</span>
        </li>
      </PropListF>

      <PropListS>
        <li>
          <span>{`Fuel Consumption: ${fuelConsumption}`}</span>
        </li>
        <li>
          <span>{`Engine Size: ${engineSize}`}</span>
        </li>
      </PropListS>
      <p>{description}</p>
      <h3>Accessories and functionalities:</h3>
      <PropListF>
        {accessories.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}

        {functionalities.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </PropListF>
      <h3>Rental Conditions: </h3>
      <ConditionsList>
        {rentalConditions.split('\n').map((item, i) => (
          <li key={i}>{item}</li>
        ))}
        <li key={'mileage'}>
          {'Mileage: '} <span>{` ${newMileage}`}</span>
        </li>
        <li key={'price'}>
          {'Price: '}
          <span>{` ${newPrice}`}</span>
        </li>
      </ConditionsList>
      <RentalCarBtn />
    </CarDetailsWraper>
  );
};

CarDetails.propTypes = {
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
