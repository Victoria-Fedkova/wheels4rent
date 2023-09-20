// import { CarsGallary } from '../../components/CarsGallary/CarsGallary';
import { useEffect } from 'react';
import { PageWrapper } from './FavouritePage.styled';
import { ScrollToTop } from '../../components/ScrollToTop/ScrollToTop';

export default function FavouritePage() {
  useEffect(() => {}, []);
  return (
    <div>
      <PageWrapper>{/* <CarsGallary /> */}</PageWrapper>
      <ScrollToTop />
    </div>
  );
}
