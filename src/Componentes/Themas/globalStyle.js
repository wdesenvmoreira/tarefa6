import { createGlobalStyle } from "styled-components"

export const GlobalLayout = createGlobalStyle`
@import "node_modules/bootstrap/scss/bootstrap";
body{
    background: ${({ theme})=> theme.body};
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
}

.divCentral {
    display: grid;
    grid-tamplate-columns: auto;
    background-color:${({ theme})=> theme.background};
    padding: 10px; 
    border-style: solid;
    border-color: ${({ theme})=> theme.color};
}
.grid-item{
    color: ${({ theme})=> theme.text};
    border: 1px rgba(0,0,0,0.8);
    padding: 1px;
    font-size: 30px;
    text-align: center;
}

.Cabecalho{
    background:#0F3057;
    color:#FF5200;
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    
}
.gridColunaCabecalho{

    text-align: center;
}
.Cabecalho img{
    width:20%;
    heigth:20%;
  
}
.textCabecalho{
    text-align: center;
    left:0px;
}

.Mapa{
    width:20%;
    heigth:20%;
}
.listaMenu{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #FF5200;
}
.listaMenu li{
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }
  
  li a:hover {
    background-color: #111111;
  }
`