import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;

  img {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 8px;
  }

  input[type='file'] {
    display: none;
  }
`;

export const NewImage = styled.label`
  height: 96px;
  background: #f8f8fc;
  border: 1px dashed #8257e5;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
