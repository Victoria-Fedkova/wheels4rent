import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
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

  return (
    <div>
      <button onClick={() => setCarToShow(null)}>
        <FontAwesomeIcon icon={faClose} />
      </button>
      <img src={img} alt={make} />
      <h2>{`${make} ${model}, ${year}`}</h2>
      <p>{`${address.split(',')[1]} | ${
        address.split(',')[2]
      } | Id: ${id} | Type: ${type}`}</p>
      <p>{`Fuel Consumption: ${fuelConsumption} | Engine Size: ${engineSize}`}</p>
      <p>{description}</p>
      <h3>Accessories and functionalities:</h3>
      <ul>
        {accessories.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <ul>
        {functionalities.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h3>Rental Conditions: </h3>
      <ul>
        {rentalConditions.split('\\').map((item, i) => (
          <li key={i}>{item}</li>
        ))}
        <li key={'mileage'}>{`Mileage: ${mileage}`}</li>
        <li key={'price'}>{`Price: ${rentalPrice}`}</li>
      </ul>
      <a href="tel:+380730000000">Rental car</a>
    </div>
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
