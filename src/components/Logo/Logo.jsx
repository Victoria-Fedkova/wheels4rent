import styled from 'styled-components';

const LogoLink = styled.a`
  display: block;
  color: #3470ff;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.03em;
`;
const LogoText = styled.p`
  color: rgb(33, 53, 71);
  font-size: 12px;
  font-size: 14px;
  line-height: calc(12 / 18);
  font-weight: 500;
`;
export const Logo = () => {
  return (
    <div>
      <LogoLink href="/">WHEELS 4 RENT</LogoLink>
      <LogoText>Find your best car rental with easy way</LogoText>
    </div>
  );
};
