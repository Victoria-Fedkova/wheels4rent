import styled from 'styled-components';

export const LogoLink = styled.a`
  display: block;
  font-size: 32px;

  background: -webkit-linear-gradient(#eee, #3470ff, rgba(11, 68, 205, 1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  transition: all 250ms linear;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.03em;
  margin-bottom: 10px;
`;
export const LogoText = styled.p`
  color: rgb(33, 53, 71);
  font-size: 14px;
  line-height: calc(12 / 18);
  font-weight: 500;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
