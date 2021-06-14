import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
}

button, input, ::placeholder {
    font-family: inherit;
    color: inherit;
  }
  
  p, h1, h2, label, span {
    line-height: 1.6;
    
  
  }

`;

export default GlobalStyles;
