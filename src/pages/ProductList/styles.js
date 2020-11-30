import styled from 'styled-components';

export const ProductContainer = styled.article`
  background: #fff;
  width: 100%;
  max-width: 700px;
  border-radius: 8px;
  margin: -56px auto 16px;
  overflow: hidden;

  + article {
    margin-top: 32px;
  }

  header {
    display: flex;
    align-items: center;
  }

  header img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
    display: block;
    color: #32264d;
    padding: 0 20px;
    margin-top: 32px;
  }

  > p {
    padding: 0 20px;
    font-size: 16px;
    line-height: 28px;
  }

  footer {
    padding: 32px 20px;
    background: #fafafc;
    border-top: 1px solid #e6e6f0;
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  footer p strong {
    color: #8257e5;
    font-size: 16px;
    display: block;
  }

  footer a {
    width: 100px;
    height: 56px;
    background: #8257e5;
    color: #fff;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    text-decoration: none;
  }

  footer a:hover {
    background: #774dd6;
  }
`;
