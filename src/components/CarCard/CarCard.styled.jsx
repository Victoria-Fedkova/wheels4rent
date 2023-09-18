import styled from 'styled-components';

export const CardWrapper = styled.li`
  background-color: #fff;
  border-radius: 14px;
  padding: 12px;
  & button {
    width: 100%;
    background-color: #3470ff;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;

  & img {
    display: block;
    width: 100%;
    height: 240px;
    object-fit: cover;
    transition: all 250ms linear;

    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }

  & > button {
    position: absolute;
    top: 14px;
    right: 14px;
    border: none;
    background: transparent;
    z-index: 1000;
    padding: 0;
    margin: 0;
    transition: all 250ms linear;
    width: 18px;
    height: 18px;
    &:hover,
    &:focus {
      outline: none;
    }

    & svg {
      width: 18px;
      height: 18px;
      transition: all 250ms linear;

      color: ${props => (props.$isfavorite ? '#3470FF' : 'white')};
      &:hover,
      &:focus {
        transform: scale(1.1);
      }
    }
  }
`;

export const CarHeader = styled.h3`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(16px / 24px);

  & span {
    color: #3470ff;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(16px / 24px);
`;

export const PropListFirst = styled.ul`
  display: inline-flex;

  padding: 0;
  margin: 0;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: calc(12px / 18px);
  font-weight: 4;

  & li:not(:last-of-type) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3px;
  }

  & li:not(:last-of-type)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 14px;
    background-color: rgba(18, 20, 23, 0.5);
    margin-left: 3px;
  }
`;

export const PropListSecond = styled.ul`
  display: inline-flex;

  padding: 0;
  margin: 0;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  letter-spacing: -0.03em;
  line-height: calc(12px / 18px);
  font-weight: 4;
  margin-bottom: 28px;
  & li:not(:last-of-type) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3px;
  }

  & li:not(:last-of-type)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 14px;
    background-color: rgba(18, 20, 23, 0.5);
    margin-left: 3px;
  }
`;
