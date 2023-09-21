import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { PageHeader } from '../PageHeader/PageHeader';
import { PageFooter } from '../PageFooter/PageFooter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/carsOperations';
import { SideBar } from '../SideBar/SideBar';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';
import { Main } from './SharedLayout.styled';
import { toggleSideBar } from '../../redux/sidebar/sidebarSlice';
import { selectOpenSideBar } from '../../redux/sidebar/sidebarSelectors';
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  const { pathname } = useLocation();
  const isFavouritePage = pathname.includes('favorites');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const currentState = useSelector(selectOpenSideBar);

  const handleToggleSideBar = () => {
    dispatch(toggleSideBar());
  };

  return (
    <>
      <PageHeader
        currentState={currentState}
        handleToggleSideBar={handleToggleSideBar}
      />
      <Main $isFavouritePage={isFavouritePage}>
        {isFavouritePage && <SideBar currentState={currentState} />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <PageFooter />
      <ScrollToTop />
    </>
  );
};
