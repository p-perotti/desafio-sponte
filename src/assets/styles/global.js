import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F7;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 500 14px Poppins, sans-serif;
    color: #6A6180;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
