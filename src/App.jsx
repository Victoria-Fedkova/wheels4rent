import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy } from 'react';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const FavouritePage = lazy(() => import('./pages/FavouritePage/FavouritePage'));
const CarsPage = lazy(() => import('./pages/CarsPage/CarsPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
import './App.css';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    // <HelmetProvider>
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/wheels4rent/'}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="catalog/*" element={<CarsPage />} />
          <Route path="favorites/*" element={<FavouritePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </HelmetProvider>
  );
}

export default App;
