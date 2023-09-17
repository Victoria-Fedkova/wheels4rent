import styled from 'styled-components';

export const RentalBtn = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 168px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: 700;
  line-height: calc() (14px/20px);
  color: white;
  border: 1px solid #3470ff;
  background-color: #3470ff;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
