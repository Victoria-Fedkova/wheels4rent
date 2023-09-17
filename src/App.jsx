import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy } from 'react';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const FavouritePage = lazy(() => import('./pages/FavouritePage/FavouritePage'));
const SerchPage = lazy(() => import('./pages/SerchPage/SerchPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
import './App.css';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="serch/*" element={<SerchPage />} />
          <Route path="favourite" element={<FavouritePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
