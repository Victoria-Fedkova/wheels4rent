import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid rgba(195, 212, 233, 0.4);
  background-color: #fff;
`;
export const HeaderWraper = styled.div`
  min-height: 92px;
  max-width: 1248px;
  padding: 1em 2rem;

  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 10px 0;
  }
`;
export const NavLinks = styled(NavLink)`
  transition: all 250ms linear;
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(195, 212, 233, 0.4);
  color: rgba(18, 20, 23, 0.5);
  fill: rgba(18, 20, 23, 0.5);

  &:hover,
  &:focus {
    background-color: #3470ff;
    color: white;
    border-color: #3470ff;
  }
  &.active {
    color: #3470ff;
    &:hover,
    &:focus {
      background-color: #3470ff;
      color: white;
    }
  }
`;

export const SideBtn = styled.button`
  transition: all 250ms linear;
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(195, 212, 233, 0.4);
  color: rgba(18, 20, 23, 0.5);
  fill: rgba(18, 20, 23, 0.5);
  background-color: white;
  &:hover,
  &:focus {
    background-color: #3470ff;
    color: white;
  }
`;
