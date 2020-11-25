import styled from 'styled-components';

export const Form = styled.form`
  fieldset {
    border: 0;
    padding: 0 56px;

    legend {
      font-weight: 700;
      font-size: 24px;
      color: #32264d;
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 16px;
      border-bottom: 1px solid #e6e6f0;
    }
  }

  fieldset + fieldset {
    margin-top: 32px;
  }

  footer {
    padding: 4px 24px;
    background: #fafafc;
    border-top: 1px solid #e6e6f0;
    margin-top: 32px;

    button {
      width: 100%;
      margin: 32px 0;
      height: 56px;
      background: #04d361;
      color: #fff;
      border: 0;
      border-radius: 8px;
      font-weight: 700;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: background-color 0.2s;
    }

    button:hover {
      background: #04bf58;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.templateColumns};
  column-gap: 16px;
  margin-top: ${(props) => (props.marginTop ? '14px' : 'auto')};

  div {
    margin-top: 0 !important;
  }
`;
