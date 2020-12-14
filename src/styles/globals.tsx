import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
      height: 100vh;
    }

    body, input, button {
        font: 18px Roboto, sans-serif;
    }

    body {
        background: #ebe9d7;
    }

    button {
        cursor: pointer;
    }
`;
