import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrapper, TestSlider } from './MainSlider.styled';

import car1 from '../../assets/car-5.png';
import car2 from '../../assets/car-4.png';
import car3 from '../../assets/car-3.png';
import car4 from '../../assets/car-2.png';
import car5 from '../../assets/car-1.png';
import { RentalCarBtn } from '../RentalCarBtn/RentalCarBtn';

const MainSlider = () => {
  const settings = {
    speed: 2000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    variableWidth: true,
    dots: true,
    slide: 'div',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <TestSlider {...settings}>
        <SliderWrapper>
          <div>
            <h2>The Best Platform for Car Rental</h2>
            <p>
              We’re working with our partners to keep you safe and in the
              driving seat.
            </p>
          </div>
          <RentalCarBtn />
          <img src={car1} alt="car" />
        </SliderWrapper>
        <SliderWrapper>
          <div>
            <h2>Easy way to rent a car at a low price</h2>
            <p>
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
          </div>
          <RentalCarBtn />

          <img src={car2} alt="car" />
        </SliderWrapper>
        <SliderWrapper>
          <div>
            <h2>Flexible rentals</h2>
            <p>
              Cancel or change most bookings for free up to 48 hours before
              pick-up
            </p>
          </div>
          <RentalCarBtn />

          <img src={car3} alt="car" />
        </SliderWrapper>
        <SliderWrapper>
          <div>
            <h2>No hidden fees</h2>
            <p>Know exactly what you’re paying.</p>
          </div>
          <RentalCarBtn />

          <img src={car4} alt="car" />
        </SliderWrapper>
        <SliderWrapper>
          <div>
            <h2>Price Match Guarantee</h2>
            <p>Found the same deal for less? We’ll match the price.</p>
          </div>
          <RentalCarBtn />

          <img src={car5} alt="car" />
        </SliderWrapper>
      </TestSlider>
    </>
  );
};

export default MainSlider;
