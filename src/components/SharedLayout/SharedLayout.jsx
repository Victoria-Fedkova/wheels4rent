import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { PageHeader } from '../PageHeader/PageHeader';
import { PageFooter } from '../PageFooter/PageFooter';
// import { Container } from '../../styles/Container.styled';
// import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <PageHeader />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <PageFooter />
    </>
  );
};
