import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  min-height: 120px;
  border-radius: 14px;
  margin-top: 32px;
  padding: 12px;
  & form {
    display: flex;
    gap: 18px;
    flex-direction: column;
    @media (min-width: 1280px) {
      flex-direction: row;

      justify-content: center;
      align-items: flex-end;
    }
  }

  & label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    color: #8a8a89;
    font-size: 14px;
    line-height: calc(12 / 18);
    font-weight: 500;
    position: relative;

    & b {
      font-size: 10px;
      position: absolute;
      font-weight: 400;
      color: red;

      bottom: -13px;
      &:last-of-type {
        right: 20px;
      }
    }
    & .css-b62m3t-container,
    & span {
      margin-top: 8px;
    }
  }
  & button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 136px;
    border-radius: 12px;

    font-size: 14px;
    font-weight: 700;
    line-height: calc(14px / 20px);
    color: white;
    border: none;
    background-color: #3470ff;
    transition: all 250ms linear;
    &:disabled {
      background-color: rgba(18, 20, 23, 0.5);
    }
    &:hover :not(:disabled),
    &:focus :not(:disabled) {
      background-color: #0b44cd;
      outline: none;
      border: none;
    }
  }
`;
export const BtnsWprap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ModelSelect = styled.label`
  & .css-13cymwt-control,
  & .css-art2ul-ValueContainer2,
  & .css-t3ipsp-control {
    width: 284px;
    height: 48px;
    border-radius: 14px;
    background-color: #f7f7fb;
    color: #121417;
    border: none;
    padding: 0;
    margin: 0;

    &:focus,
    &:target,
    &:active {
      outline: none;
      border: none;
    }
  }
  & .css-1i837h3-ValueContainer2 {
    padding-left: 0;
  }

  & .css-1i837h3-ValueContainer2 {
    max-height: 48px;
    overflow-y: scroll;
  }
  & .css-1p3m7a8-multiValue {
    font-size: 14px;
    padding: 2px;
    border-radius: 14px;
  }
  & .css-13cymwt-control,
  & .css-t3ipsp-control {
    padding-left: 18px;
    padding-right: 0px;
  }
`;
export const PriceSelect = styled.label`
  & .css-13cymwt-control,
  & .css-art2ul-ValueContainer2,
  & .css-t3ipsp-control {
    width: 135px;
    height: 48px;
    border-radius: 14px;
    background-color: #f7f7fb;
    color: #121417;
    border: none;
    padding: 0;
    margin: 0;

    &:focus {
      outline: none;
      border: none;
    }
  }
  & .css-1dimb5e-singleValue {
    overflow: visible;
  }
  & .css-13cymwt-control,
  & .css-t3ipsp-control {
    padding-left: 18px;
    padding-right: 0px;
  }
  & .css-1xc3v61-indicatorContainer {
    padding-left: 0;
  }
  & input:-internal-autofill-selected {
    background-color: #f7f7fb !important;
  }
`;

export const MileageSelect = styled.label`
  span {
    display: flex;
    flex-wrap: nowrap;
  }
  & input {
    height: 48px;
    width: 160px;
    background-color: #f7f7fb;
    color: #121417;
    border: none;
    padding-left: 18px;
    &::placeholder {
      color: #121417;
    }
    &:focus {
      outline: none;
      border: none;
    }
    &:first-of-type {
      border-bottom-left-radius: 14px;
      border-top-left-radius: 14px;
      border-right: 0.5px solid rgba(138, 138, 137, 0.2);
    }
    &:last-of-type {
      border-bottom-right-radius: 14px;
      border-top-right-radius: 14px;
      border-left: 0.5px solid rgba(138, 138, 137, 0.2);
    }
  }
  & input:-internal-autofill-selected {
    background-color: #f7f7fb !important;
  }
`;
