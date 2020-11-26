import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #8257e5;
  border-radius: 50px;
  padding: 6px 14px;
  margin: 6px;

  span {
    font-size: 14px;
    color: #fff;
  }

  button {
    display: flex;
    align-items: center;
    background: #fff;
    border: 0;
    border-radius: 50px;
    color: #8257e5;
    font-size: 14px;
    margin-left: 6px;
    padding: 2px;
    transition: opacity 0.2s;
  }

  button:hover {
    opacity: 0.8;
  }
`;
