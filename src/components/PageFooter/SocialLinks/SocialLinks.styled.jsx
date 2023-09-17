import styled from 'styled-components';

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialLink = styled.a`
  transition: all 250ms linear;
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(195, 212, 233, 0.4);
  color: rgba(18, 20, 23, 0.5);

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
  &:hover,
  &:focus {
    background-color: #3470ff;
    color: white;
    border-color: #3470ff;
  }
`;
