import styled from 'styled-components';

export const Footer = styled.footer`
  color: #121417;
`;

export const FooterTopWrapper = styled.div`
  padding: 34px 0;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid rgba(195, 212, 233, 0.4);

  & p {
    margin-top: 24px;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: rgba(18, 20, 23, 0.5);
  }
  & h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 24px;
  }
`;

export const FooterBottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 34px 0;
  color: #121417;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;

  & a {
    display: inline-block;
    &:first-of-type {
      margin-right: 60px;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  & div:not(:last-of-type) {
    margin-right: 60px;
  }
`;
