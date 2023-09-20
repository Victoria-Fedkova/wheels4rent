import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { PageHeader } from '../PageHeader/PageHeader';
import { PageFooter } from '../PageFooter/PageFooter';
import { useDispatch } from 'react-redux';
import { fetchCars } from '../../redux/cars/carsOperations';
import { SideBar } from '../SideBar/SideBar';
// import { Container } from '../../styles/Container.styled';
// import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      <PageHeader />
      <main>
        {pathname.includes('favorites') && <SideBar />}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <PageFooter />
    </>
  );
};
