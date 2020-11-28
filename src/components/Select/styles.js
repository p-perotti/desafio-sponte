import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  + div {
    margin-top: 14px;
  }

  label {
    font-size: 14px;
    color: #9c98a6;
  }

  select {
    width: 100%;
    height: 56px;
    margin-top: 8px;
    border-radius: 8px;
    background: #f8f8fc;
    border: 1px solid #e6e6f0;
    outline: 0;
    padding: 0 16px;
    font-size: 16px;

    option {
      font-size: 16px;
    }
  }
`;
