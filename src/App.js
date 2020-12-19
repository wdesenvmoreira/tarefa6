
import './App.css';
import React, { Component, useState, useEffect} from 'react'
import Cabecalho from './Componentes/Cabecalho'
import  Rodape   from './Componentes/Rodape'
import Pesquisa  from './Componentes/Pesquisa'
import MenuInicial  from './Componentes/MenuInicial'
import MenuCentral  from './Componentes/MenuCentral'
import Mapa  from './Componentes/Mapa'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { ThemeProvider } from 'styled-components'
import { GlobalLayout } from  './Componentes/Themas/globalStyle'
import { dark, ligth } from './Componentes/Themas/index'

function App() {
  const [isLogin, setLogin] = useState('');
  const [thema, setThema] = useState(ligth);

    useEffect(()=>{
        if(!isLogin){
          setThema(dark)
        }else{
          setThema(ligth)
        }
      },[isLogin])
    
    
    function sign(event){
              setLogin(!isLogin);
               event.preventDefault();
               
          }




  return (
    <div className="">
          <ThemeProvider theme={ thema }>
            <GlobalLayout/>
          < Cabecalho/>

          <div className='divCentral'>
            <Pesquisa />
            <MenuInicial />
            <MenuCentral />
            <Mapa />
          </div>

          <Rodape />
     </ThemeProvider>
    </div>
  );
}
GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyDVKfnqFbO5II8vJpV8_DI0TTX6bAQU2v8',
  }
  ))(Mapa)

export default App;
