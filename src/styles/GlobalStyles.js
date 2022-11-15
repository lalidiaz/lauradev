import { createGlobalStyle } from "styled-components";
import { device } from "../styles/device";

export const GlobalStyles = createGlobalStyle`
    *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      // font-family: 'Merriweather', serif;
      font-family: 'Montserrat', sans-serif;
    }
    #root, body{
      height:100%;
      width:100%;
      background: black;
      color: white;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    
    ol,
    ul {
      list-style: none;
      padding-inline-start: 0px;
      padding: inherit;
    }

    video{
     
      height:200px;
      width:100%;
      @media ${device.laptop} {
        
        height:auto;
        width:100%;
      }
    }
 `;
