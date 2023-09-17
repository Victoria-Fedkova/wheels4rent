import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalWrapper } from './Modal.styled';
import { CarDetails } from '../CarDetails/CarDetails';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, car }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalWrapper>
        <CarDetails car={car} onClose={onClose} />
      </ModalWrapper>
    </ModalOverlay>,
    modalRoot
  );
};

CarDetails.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.number.isRequired,
    engineSize: PropTypes.number.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string),
    functionalities: PropTypes.arrayOf(PropTypes.string),
    rentalPrice: PropTypes.number.isRequired,
    rentalCompany: PropTypes.number.isRequired,
    address: PropTypes.number.isRequired,
    rentalConditions: PropTypes.number.isRequired,
    mileage: PropTypes.number.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};
