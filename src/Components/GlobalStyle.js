// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black; /* Change this to your desired background color */
    color: #fff; /* Ensure text is visible on dark background */
    margin: 0;
    font-family: 'Arial', sans-serif; /* Change this to your desired font */
  }

  /* Additional global styles can be added here */
`;

export default GlobalStyle;
