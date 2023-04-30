import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme['background']};
    color: ${props => props.theme["base-text"]};

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
  
`