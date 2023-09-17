import styled from 'styled-components';

const CommunityWrap = styled.div`
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
export const Community = () => {
  return (
    <CommunityWrap>
      <h3>Community</h3>
      <ul>
        <li>
          <a href="/">Events</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Invite a friend</a>
        </li>
      </ul>
    </CommunityWrap>
  );
};
