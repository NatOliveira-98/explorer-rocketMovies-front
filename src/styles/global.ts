import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* RESET */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  /* LAYOUT */
  body {
    background-color: ${({ theme }) => theme.colors.background_medium};
    color: ${({ theme }) => theme.colors.white};
  }

`;
