import { useDispatch, useSelector } from 'react-redux';
import { CarsGallary } from '../../components/CarsGallary/CarsGallary';
import { SerchForm } from '../../components/SerchForm/SerchForm';
import { ContentWrapper } from '../MainPage/MainPage.styled';
import { useEffect } from 'react';
import { fetchSomeCars } from '../../redux/cars/carsOperations';
import { selectPage } from '../../redux/cars/carsSelectors';
import { ScrollToTop } from '../../components/ScrollToTop/ScrollToTop';

export default function CarsPage() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  console.log(page);
  useEffect(() => {
    dispatch(fetchSomeCars(page));
  }, [dispatch, page]);

  return (
    <div>
      <ContentWrapper>
        <SerchForm />
      </ContentWrapper>
      <ContentWrapper>
        <CarsGallary />
      </ContentWrapper>
      <ScrollToTop />
    </div>
  );
}
