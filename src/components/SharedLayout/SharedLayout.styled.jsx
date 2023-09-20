import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  display: flex;
`;

export const Main = styled.main`
  display: ${props => (props.$isFavouritePage ? 'flex' : 'block')};
`;
