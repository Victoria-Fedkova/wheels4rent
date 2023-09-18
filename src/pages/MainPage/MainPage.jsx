import { useDispatch } from 'react-redux';
import MainSlider from '../../components/MainSlider/MainSlider';
import { SectionWrap, SliderContainer } from './MainPage.styled';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/cars/carsOperations';
import { Link } from 'react-router-dom';
import { CarsGallary } from '../../components/CarsGallary/CarsGallary';

export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <SliderContainer>
        <MainSlider />
      </SliderContainer>
      <div>
        <SectionWrap>
          <p>Popular Car</p>
          <Link to="cars">View All</Link>
        </SectionWrap>
        <CarsGallary />
      </div>
    </>
  );
}
