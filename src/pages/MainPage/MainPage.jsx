import MainSlider from '../../components/MainSlider/MainSlider';
import {
  ContentWrapper,
  SectionWrap,
  SliderContainer,
} from './MainPage.styled';
import { Link } from 'react-router-dom';
import { CarsGallary } from '../../components/CarsGallary/CarsGallary';

export default function MainPage() {
  return (
    <div>
      <SliderContainer>
        <MainSlider />
      </SliderContainer>
      <ContentWrapper>
        <SectionWrap>
          <p>Popular Car</p>
          <Link to="catalog">View All</Link>
        </SectionWrap>
        <CarsGallary />
      </ContentWrapper>
    </div>
  );
}
