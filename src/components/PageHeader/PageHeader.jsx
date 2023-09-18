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

export const PageHeader = () => {
  // const { pathname, state } = useLocation();
  // const backLinkHref = state?.from ?? '/';
  return (
    <Header>
      <HeaderWraper>
        <Logo />
        <nav>
          <NavLinks to="/">
            <FontAwesomeIcon icon={faHome} />
          </NavLinks>
          <NavLinks to="/cars">
            <FontAwesomeIcon icon={faCar} />
          </NavLinks>
          <NavLinks to="/favorites">
            <FontAwesomeIcon icon={faHeart} />
          </NavLinks>
          {/* {(pathname.includes('cars') || pathname.includes('favorites')) && (
          <NavLinks to={backLinkHref}>
          <FontAwesomeIcon icon={faArrowLeft} />
          </NavLinks>
        )} */}
        </nav>
      </HeaderWraper>
    </Header>
  );
};
