import styled from 'styled-components';

const LogoLink = styled.a`
  display: block;
  color: #3470ff;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.03em;
`;
export const Logo = () => {
  return <LogoLink href="/">WHEELS 4 RENT</LogoLink>;
};
