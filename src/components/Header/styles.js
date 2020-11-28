import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #8257e5;
`;

export const NavBar = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  font-weight: 700;
  font-size: 16px;
  color: #fff;

  img {
    height: 36px;
  }

  a {
    display: flex;
    align-items: center;
    color: #fff;
    transition: opacity 0.2s;
  }

  a:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.div`
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  margin: 0 auto 72px;

  strong {
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: #fff;
  }
`;
