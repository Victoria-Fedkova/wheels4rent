import styled from 'styled-components';

export const CarDetailsWraper = styled.div`
  background-color: #fff;
  border-radius: 24px;
  padding: 40px;
  /* max-height: 100vh; */
  max-width: 541px;

  position: relative;
  color: #121417;

  & button {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    outline: none;
    position: absolute;
    top: 22px;
    right: 22px;
    color: #121417;
    & svg {
      font-size: 18px;
    }
  }

  & img {
    display: block;
    width: 100%;
    /* max-width: 461px; */
    max-height: 248px;
    border-radius: 14px;
    object-fit: cover;
    margin-bottom: 14px;
  }

  & h2 {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: calc(18px / 24px);
    margin-bottom: 8px;

    & span {
      color: #3470ff;
    }
  }

  & h3 {
    font-size: 14px;
    line-height: calc(12px / 20px);
    font-weight: 400;
    margin-bottom: 9px;
  }

  & p {
    font-size: 14px;
    font-weight: 400;
    line-height: calc(14px / 20px);
    margin-bottom: 24px;
  }
`;

export const PropListF = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: calc(12px / 18px);
  font-weight: 400;
  margin-bottom: 4px;

  & li:not(:last-of-type) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
  }

  & li:not(:last-of-type)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 14px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 6px;
  }
`;

export const PropListS = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: calc(12px / 18px);
  font-weight: 400;
  margin-bottom: 14px;

  & li:not(:last-of-type) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
  }

  & li:not(:last-of-type)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 14px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 6px;
  }
`;

export const ConditionsList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  gap: 8px;
  margin-bottom: 24px;

  & li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    padding: 0 14px;
    border-radius: 35px;
    background-color: #f9f9f9;
    color: #363535;
    font-size: 12px;
    line-height: calc(12 / 18);
    letter-spacing: -0.02em;
    & span {
      color: #3470ff;
      font-weight: 700;
    }
  }
`;
