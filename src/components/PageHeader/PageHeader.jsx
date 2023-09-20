import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCar, faHome } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../Logo/Logo';
import { Header, HeaderWraper, NavLinks } from './PageHeader.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';

export const PageHeader = () => {
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
