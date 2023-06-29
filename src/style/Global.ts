import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
     }
    
     body{
      width: 100vw;
      height: 100vh;
     }
     button{
        cursor: pointer;
        background: transparent;
        border: none;
     }
     ul{
        margin: 0;
        padding: 0;
        list-style: none ;
     }
     li{
        list-style: none;
     }

`;
export const Container = styled.div`
  @media (min-width: 700px) {
    margin: 0 auto;
    width: 970px;
  }
`;
