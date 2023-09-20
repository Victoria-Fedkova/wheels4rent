import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  display: flex;

  /* min-height: 100vh; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  @media screen and (min-width: 1440px) {
    width: calc(100% - 289px);
  }
`;

export const Main = styled.main`
  display: ${props => (props.$isFavouritePage ? 'flex' : 'block')};
`;
