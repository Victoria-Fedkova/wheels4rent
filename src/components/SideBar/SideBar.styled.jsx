import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  width: 300px;
  background-color: white;
  min-height: 100%;
  padding: 32px;
  @media screen and (max-width: 1280px) {
    position: fixed;
    z-index: 999;
    height: 100%;
    transform: ${props =>
      props.$isOpen ? 'transform: translateX(0%)' : 'translateX(-100%)'};
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  body & {
    overflow: ${props => (props.$isOpen ? 'hidden' : 'auto')};
    overflow: hidden;
  }
`;

export const CheckboxForm = styled.form`
  margin-bottom: 50px;
  & h3 {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.02em;
    color: rgba(18, 20, 23, 0.5);
    margin-bottom: 28px;
  }
  & div {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  & label {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #121417;
    letter-spacing: -0.02em;
    font-size: 16px;
    font-weight: 500;
    line-height: calc(16px / 24px);
  }
  & input {
    background-color: #fff;
    color: white;
  }
`;

export const SliderForm = styled.form`
  & h3 {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.02em;
    color: rgba(18, 20, 23, 0.5);
    margin-bottom: 28px;
  }
  & .css-c5m0sj {
    background-color: #3470ff;
  }
  & p {
    color: #121417;
    letter-spacing: -0.02em;
    font-size: 16px;
    font-weight: 500;
    line-height: calc(16px / 24px);
  }
`;
