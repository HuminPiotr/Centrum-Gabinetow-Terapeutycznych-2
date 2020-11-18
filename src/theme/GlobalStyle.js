import { createGlobalStyle } from "styled-components"
import "bootstrap/dist/css/bootstrap.css"

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html{
        font-size: 62.5%;
    }
    body{
        font-size: 1.6rem;
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
    p{
       font-size: 2rem; 
       line-height: 125%;
    }
    h1{
        font-size: 4.8rem; 

    }
    h2{
        font-size: 3.2rem; 
    }
    ul,li{
        margin: 0;
        padding: 0;
    }
    a {
      text-decoration: none ;
      color: inherit ;
    }
    a:hover{
        text-decoration: none;
        color: inherit;
    }
    button{
        padding: 0;
        cursor: pointer;
        font-family: 'Open Sans', sans-serif;
    }


//CAROUSEL //
    .hero{
        display: flex;
        nav{
            width: 20%;
         }
        }
  @media (max-width: 640px) {
      .hero{
    flex-direction: column;
        nav{
         width:100%;
        }
     }
    }
`

export default GlobalStyle
