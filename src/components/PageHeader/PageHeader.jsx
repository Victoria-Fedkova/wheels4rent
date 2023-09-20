import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faCar,
  faHome,
  // faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
// import { useLocation } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { Header, HeaderWraper, NavLinks } from './PageHeader.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';

export const PageHeader = () => {
  // const { pathname, state } = useLocation();
  // const backLinkHref = state?.from ?? '/';
  const dispatch = useDispatch();
  return (
    <Header>
      <HeaderWraper>
        <Logo />
        <nav>
          <NavLinks to="/">
            <FontAwesomeIcon
              icon={faHome}
              onClick={() => {
                console.log('11111');

                const payload = {
                  model: [],
                  price: '',
                  mileageFrom: 0,
                  mileageTo: 0,
                };
                dispatch(setFilter(payload));
              }}
            />
          </NavLinks>
          <NavLinks to="/catalog">
            <FontAwesomeIcon icon={faCar} />
          </NavLinks>
          <NavLinks to="/favorites">
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => {
                console.log('11111');
                const payload = {
                  model: [],
                  price: '',
                  mileageFrom: 0,
                  mileageTo: 0,
                };
                dispatch(setFilter(payload));
              }}
            />
          </NavLinks>
        </nav>
      </HeaderWraper>
    </Header>
  );
};
