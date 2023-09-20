import MainSlider from '../../components/MainSlider/MainSlider';
import { SectionWrap, SliderContainer } from './MainPage.styled';
import { Link } from 'react-router-dom';
import { CarsGallary } from '../../components/CarsGallary/CarsGallary';

export default function MainPage() {
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
