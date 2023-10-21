import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }
  
  body{
    height: 100vh;
    width: 100%;
    background: ${({ theme }) => theme.colors['base-background']};
    color:  ${({ theme }) => theme.colors['base-text']};
    font-size: 1.6rem;
  }

  body, input, text-area, button, select{
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button{
    cursor: pointer;
  }

   a{
    text-decoration: none;
  }

`
