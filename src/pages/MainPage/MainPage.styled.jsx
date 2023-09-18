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

export const SectionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600px;
  color: #8a8a89;
  padding: 10px 20px;
  margin-bottom: 20px;
  & a {
    color: #3470ff;
    transition: all 250ms linear;

    &:hover,
    &:focus {
      color: #0b44cd;
    }
  }
`;
