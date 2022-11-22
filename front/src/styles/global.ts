import { createGlobalStyle } from "styled-components";

//Aqui vou colocar toda a estilização que eu quero que seja global na minha aplicação
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    //background-image: linear-gradient(to right, rgb(19, 71, 214), rgb(255, 115, 0));
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.fontColor};
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  label{
    font-weight: bold;
  }
`;