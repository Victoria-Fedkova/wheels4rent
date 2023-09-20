import styled from 'styled-components';

export const CarsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 274px);
  grid-auto-rows: 426px;
  row-gap: 50px;
  column-gap: 29px;
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
