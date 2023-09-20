import { CarsGallary } from '../../components/CarsGallary/CarsGallary';
import { useEffect } from 'react';
import { PageWrapper } from './FavouritePage.styled';

export default function FavouritePage() {
  useEffect(() => {}, []);
  return (
    <div>
      <PageWrapper>
        <CarsGallary />
      </PageWrapper>
    </div>
  );
}
