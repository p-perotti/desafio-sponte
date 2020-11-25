import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  + div {
    margin-top: 14px;
  }

  label {
    font-size: 14px;
    color: #9c98a6;

    textarea {
      width: 100%;
      height: 102px;
      min-height: 56px;
      margin-top: 0.8rem;
      border-radius: 8px;
      background: #f8f8fc;
      border: 1px solid #e6e6f0;
      outline: 0;
      resize: vertical;
      padding: 12px 16px;
      font-size: 16px;
    }
  }
`;
