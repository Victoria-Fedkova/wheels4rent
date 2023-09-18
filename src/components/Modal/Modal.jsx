import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalWrapper } from './Modal.styled';
import { CarDetails } from '../CarDetails/CarDetails';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ setCarToShow, car }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setCarToShow(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setCarToShow]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setCarToShow(null);
    }
  };

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalWrapper>
        <CarDetails car={car} setCarToShow={setCarToShow} />
      </ModalWrapper>
    </ModalOverlay>,
    modalRoot
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
