import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <div>page header</div>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <div>page footer</div>
    </div>
  );
};
