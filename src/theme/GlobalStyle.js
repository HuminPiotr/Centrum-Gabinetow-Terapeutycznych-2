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
    }
    button{
        padding: 0;
        cursor: pointer;
        font-family: 'Open Sans', sans-serif;
    }
`

export default GlobalStyle
