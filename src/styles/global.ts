import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: ${props => props.theme['background']};
    color: ${props => props.theme["base-text"]};
    scroll-behavior: smooth;
    overflow-x: hidden;

    &::-webkit-scrollbar {
    width: 10px; 
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme["purple"]}; 
      border-radius: 6px; 
    }

    &::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme["purple-dark"]}; 
    }
  }

  
  @media screen and (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
`

