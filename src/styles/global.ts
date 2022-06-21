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

  button, input, a {
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  /* LAYOUT */
  body {
    background-color: ${({ theme }) => theme.colors.background_medium};
    color: ${({ theme }) => theme.colors.white};

    -webkit-font-smoothing: antialiased;
  }
  
  body * {
    font-size: 1.6rem;
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
  }

  a, button {
    cursor: pointer;
    transition: filter 0.3s;
  }

  a:hover, button:hover {
    filter: brightness(0.8);
  }
`;
