import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { PageHeader } from '../PageHeader/PageHeader';
import { PageFooter } from '../PageFooter/PageFooter';
import { useDispatch } from 'react-redux';
import { fetchCars } from '../../redux/cars/carsOperations';
import { SideBar } from '../SideBar/SideBar';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';
import { Main } from './SharedLayout.styled';
// import { Container } from '../../styles/Container.styled';
// import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  const { pathname } = useLocation();
  const isFavouritePage = pathname.includes('favorites');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      <PageHeader />
      <Main $isFavouritePage={isFavouritePage}>
        {isFavouritePage && <SideBar />}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <PageFooter />
      <ScrollToTop />
    </>
  );
};
