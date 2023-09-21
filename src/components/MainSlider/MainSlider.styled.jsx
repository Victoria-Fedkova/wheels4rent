import styled from 'styled-components';
import img from '../../assets/Ads2.png';
import blue from '../../assets/blue.png';

import Slider from 'react-slick';

export const TestSlider = styled(Slider)`
  & .slick-slide {
    max-width: 335px;
    /* max-width: 100%; */

    padding: 10px 20px;

    border-radius: 20px;

    text-align: left;
    color: white;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media screen and (min-width: 768px) {
      max-width: 372px;
      margin-right: 24px;
    }

    @media screen and (min-width: 1280px) {
      min-width: 580px;

      /* margin-right: 24px; */
    }
    &:nth-child(even) {
      border: 1px solid #54a6ff;
      background-image: url(${blue});
    }
    &:nth-child(odd) {
      border: 1px solid #3563e9;
      background-image: url(${img});
      & a {
        background-color: #54a6ff;
      }
    }
    & a {
      margin-top: 10px;
      transition: all 250ms linear;

      &:hover,
      &:focus {
        background-color: #0b44cd;
      }
    }
    & img {
      display: block;
      max-height: 90px;
      margin-left: auto;
    }
  }
`;
export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 80%;
    min-height: 160px;
  }

  & h2 {
    font-size: 32px;
    line-height: 1.5;
    letter-spacing: -0.03em;
    font-weight: 700;
  }

  & p {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    font-weight: 500;
  }
`;
