import styled from 'styled-components';

export const SliderContainer = styled.div`
  margin: 0 auto 32px;

  width: 335px;

  box-sizing: border-box;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 580px;
  }

  @media screen and (min-width: 1440px) {
    width: 1184px;
  }
`;
