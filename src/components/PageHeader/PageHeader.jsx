import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCar, faHome } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../Logo/Logo';
import { Header, NavLinks } from './PageHeader.styled';

export const PageHeader = () => {
  return (
    <Header>
      <Logo />
      <nav>
        <NavLinks to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLinks>
        <NavLinks to="/cars">
          <FontAwesomeIcon icon={faCar} />
        </NavLinks>
        <NavLinks to="/favourite">
          <FontAwesomeIcon icon={faHeart} />
        </NavLinks>
      </nav>
    </Header>
  );
};
