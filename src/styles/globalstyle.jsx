import { createGlobalStyle } from "styled-components";
import banner from "../assets/banner30.png";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-image: url(${banner});
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 100vh;
    background-color: #000000;
    background-size: cover;
  }

  h1 {
    font-family: 'Emilys Candy', cursive; 
  }
  p {
    font-family: 'Inter', sans-serif;
  }
`;
