import MainSlider from '../../components/MainSlider/MainSlider';
import {
  ContentWrapper,
  SectionWrap,
  SliderContainer,
} from './MainPage.styled';
import { Link } from 'react-router-dom';
import { CarsGallary } from '../../components/CarsGallary/CarsGallary';
import { useSelector } from 'react-redux';
import { selectRecent } from '../../redux/likes/likesSelectors';

export default function MainPage() {
  const recentCars = useSelector(selectRecent);

  const recentCarsSpliced = recentCars.slice(0, 4);

  return (
    <div>
      <SliderContainer>
        <MainSlider />
      </SliderContainer>
      <ContentWrapper>
        <SectionWrap>
          <p>Popular Cars</p>
          <Link to="catalog">View All</Link>
        </SectionWrap>
        <CarsGallary />
        {recentCars.length > 0 && (
          <>
            <SectionWrap>
              <p>Recently Viewed Cars</p>
              <Link to="catalog">View All</Link>
            </SectionWrap>
            <CarsGallary carsList={recentCarsSpliced} />
          </>
        )}
      </ContentWrapper>
    </div>
  );
}
