import styled from 'styled-components';

const AboutWrap = styled.div`
  & li:not(:last-of-type) {
    margin-bottom: 20px;
  }
  & a {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: rgba(18, 20, 23, 0.5);
  }
`;
export const About = () => {
  return (
    <AboutWrap>
      <h3>About</h3>
      <ul>
        <li>
          <a href="/">How it works</a>
        </li>
        <li>
          <a href="/">Featured</a>
        </li>
        <li>
          <a href="/">Partnership</a>
        </li>
      </ul>
    </AboutWrap>
  );
};
