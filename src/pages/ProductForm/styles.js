import styled from 'styled-components';

export const FormContainer = styled.div`
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

      button {
        display: flex;
        align-items: center;
        background: none;
        border: 0;
        color: #8257e5;
        font-weight: 700;
        font-size: 16px;
        transition: color 0.2s;
      }

      button:hover {
        color: #774dd6;
      }
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

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.templateColumns};
  column-gap: 16px;
  margin-top: ${(props) => (props.marginTop ? '14px' : 'auto')};

  div {
    margin-top: 0 !important;
  }

  button {
    display: flex;
    align-items: center;
    background: none;
    border: 0;
    color: #8257e5;
    font-weight: 700;
    font-size: 16px;
    transition: color 0.2s;
  }

  button:hover {
    color: #774dd6;
  }
`;

export const CategoryInput = styled.label`
  font-size: 14px;
  color: #9c98a6;

  span {
    font-size: 12px;
    color: #c1bccc;
    margin-left: 8px;
  }

  input {
    width: 100%;
    height: 56px;
    margin-top: 8px;
    border-radius: 8px;
    background: #f8f8fc;
    border: 1px solid #e6e6f0;
    outline: 0;
    padding: 0 16px;
    font-size: 16px;
  }
`;

export const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 14px;
`;
