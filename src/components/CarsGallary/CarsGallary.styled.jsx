import styled from 'styled-components';

export const CarsList = styled.div`
  display: grid;

  grid-template-columns: repeat(1, minmax(210, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(210, 1fr));
  grid-row-gap: 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(336px, 1fr));

    grid-template-rows: repeat(auto-fit, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: ${props =>
      props.$isFavouritePage ? 'repeat(3, 274px)' : 'repeat(4, 274px)'};
    grid-template-rows: auto;
  }
`;

export const LoadMoreBtn = styled.button`
  display: flex;
  margin: 100px auto 0px;
  border: none;
  outline: none;
  background: none;
  color: #3470ff;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: #0b44cd;
    outline: none;
  }
`;

export const PlaceHolder = styled.h2`
  text-align: center;
  color: rgba(18, 20, 23, 0.5);
`;
