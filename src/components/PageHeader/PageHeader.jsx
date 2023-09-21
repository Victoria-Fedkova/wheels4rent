import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faCar,
  faHome,
  faBookOpen,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../Logo/Logo';
import { Header, HeaderWraper, NavLinks, SideBtn } from './PageHeader.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';

export const PageHeader = ({ currentState, handleToggleSideBar }) => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 1279px)' });
  const { pathname } = useLocation();
  const isFavouritePage = pathname.includes('favorites');
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
          {isMobile && isFavouritePage && (
            <SideBtn onClick={handleToggleSideBar}>
              {currentState ? (
                <FontAwesomeIcon icon={faClose} />
              ) : (
                <FontAwesomeIcon icon={faBookOpen} />
              )}
            </SideBtn>
          )}
        </nav>
      </HeaderWraper>
    </Header>
  );
};

PageHeader.propTypes = {
  currentState: PropTypes.bool,
  handleToggleSideBar: PropTypes.func,
};
