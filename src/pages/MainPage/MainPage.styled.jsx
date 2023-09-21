import styled from 'styled-components';

export const SliderContainer = styled.div`
  margin: 0 auto;
  padding: 32px 0;
  max-width: 335px;

  box-sizing: border-box;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1184px;
  }
`;
export const ContentWrapper = styled.div`
  padding: 0 32px 32px 32px;
`;
export const SectionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600px;
  color: #8a8a89;
  padding: 10px 20px;

  &:not(:first-of-type) {
    margin-bottom: 20px;
  }
  margin-top: 20px;

  & a {
    color: #3470ff;
    transition: all 250ms linear;

    &:hover,
    &:focus {
      color: #0b44cd;
    }
  }
`;
