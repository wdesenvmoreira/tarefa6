import React from 'react'
import swissknif from  './img/swissknif.png'
function Cabecalho (){

    return(
        <div className='Cabecalho '>

            <div className='logoCabecalho gridColunaCabecalho'>
                <img src={swissknif} />
            </div>
            <div className='textCabecalho gridColunaCabecalho'>
                <p>CENTRAL DE SERVIÇOS</p>
            </div>

        </div>
    )
}

export default Cabecalho
